import ItemCount from "./ItemCount";
import { useContexto } from "./miContexto";
import { Card } from "react-bootstrap";

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContexto();

  const onAdd = (contador) => {
    agregarAlCarrito(producto, contador);
  };

  return (
    <div>
      <div className="container text-center card-style">
        <div className="card border-dark mb-3">
          <Card.Img variant="top" src={producto.imagen} />

          <div className="card-body">
            <h3 className="card-title">{producto.title}</h3>
            <p className="card-title">
              <h6>Descripción:</h6> {producto.description}
            </p>

            <h6 className="card-text">Precio: $ {producto.precio}</h6>
            <div>
              <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
