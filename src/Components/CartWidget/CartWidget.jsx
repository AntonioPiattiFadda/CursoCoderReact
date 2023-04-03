import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  const { getCartQuantity } = useContext(CartContext);
  const total = getCartQuantity();

  return (
    <div className={styles.cart__container}>
      <Link to="/cart">
        <span className={styles.cart__count}>{total}</span>
        <BsCart2 className={styles.cart__icon} />
      </Link>
    </div>
  );
};

export default CartWidget;
