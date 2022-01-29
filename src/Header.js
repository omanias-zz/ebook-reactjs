import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            E-Book
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/productos" className="nav-link active">
                  Tienda
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/categoria/ficcion">
                    Ficcion
                  </a>
                  <a className="dropdown-item" href="/categoria/no-ficcion">
                    No Ficcion
                  </a>
                  <a className="dropdown-item" href="/categoria/juveniles">
                    Juveniles
                  </a>
                  <a className="dropdown-item" href="/categoria/niños">
                    Niños
                  </a>
                </div>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
