// import { useContexto } from "./miContexto";
import "./bootstrap.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="container text-center card-style">
        <div className="card border-dark mb-3">
          <Card.Img variant="top" src={item.imagen} />

          <div className="card-body">
            <h4 className="card-title">{item.title}</h4>
            <h6 className="card-title">{item.categoria}</h6>

            <p className="card-text">Precio:$ {item.precio}</p>
            <div>
              <Link to={`/producto/${item.id}`}>
                <button type="button" className="btn btn-outline-info">
                  Ver detalle
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
