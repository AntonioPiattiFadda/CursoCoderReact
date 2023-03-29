import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { getCartQuantity } = useContext(CartContext);
  const total = getCartQuantity();

  return (
    <div>
      <Link to="/cart">
        <span>{total}</span>
        <BsCart2 />
      </Link>
    </div>
  );
};

export default CartWidget;
