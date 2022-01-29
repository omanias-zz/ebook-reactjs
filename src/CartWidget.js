import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContexto } from "./miContexto";

import "./bootstrap.css";

const CartWidget = () => {
  const { cantidad_total } = useContexto();
  return (
    <>
      <Link to="/carrito">
        <div className="cart">
          <FaCartArrowDown />
          <p>{cantidad_total}</p>
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
