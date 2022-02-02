import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContexto } from "./miContexto";

import "./bootstrap.css";

const CartWidget = () => {
  const { cantidad_total } = useContexto();
  return (
    <>
      <div style={{ display: cantidad_total === 0 ? "none" : "block" }}>
        <div className="cart">
          <Link to="/carrito" title="Cart" className="nav-link">
            <FaCartArrowDown />
            <span className="counter">{cantidad_total}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
