import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (
    <div>
      <span>0</span>
      <AiOutlineShoppingCart size={"24px"} />
    </div>
  );
};

export default CartWidget;
