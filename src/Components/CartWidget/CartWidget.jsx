import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <span>0</span>
        <BsCart2 />
      </Link>
    </div>
  );
};

export default CartWidget;
