import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = () => {
  const {
    cart,
    clearCart,
    removeProduct,
    getCartTotalPrice,
    addOneElement,
    minusOneElement,
  } = useContext(CartContext);

  const [showFormCheckout, setShowFormCheckout] = useState(false);
  const total = getCartTotalPrice();
  const handleBuy = () => {
    setShowFormCheckout(!showFormCheckout);
  };
  const handleClear = () => {
    Swal.fire({
      title: "Do you want to clear the cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Clear",
      denyButtonText: `Don't clear`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Cleared!", "", "success");
      } else if (result.isDenied) {
        Swal.fire(`The cart wasn't cleared`, "", "info");
      }
    });
  };
  const handlePlus = (id, stock) => {
    addOneElement(id, stock);
  };

  const handleMinus = (id) => {
    minusOneElement(id);
  };

  return !showFormCheckout ? (
    cart.length ? (
      <div>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <span>{product.price}</span>
              <span style={{ color: "red" }}>Cantidad: {product.quantity}</span>
              <span>{product.stock} disponibles</span>
              <button onClick={() => handlePlus(product.id, product.stock)}>
                +
              </button>
              <button onClick={() => handleMinus(product.id)}>-</button>
              <button
                onClick={() => {
                  removeProduct(product.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
        <div>Total : {total}</div>
        <div>
          <button onClick={handleClear}>Limpiar carrito</button>
          <button onClick={handleBuy}>Comprar</button>
        </div>
      </div>
    ) : (
      <EmptyCart />
    )
  ) : (
    <FormCheckout getCartTotalPrice={getCartTotalPrice} cart={cart} />
  );
};

export default Cart;
