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
            <h4 className="card-title">{producto.title}</h4>
            <h6 className="card-title">Categoria: {producto.categoria}</h6>

            <p className="card-text">Precio: $ {producto.precio}</p>
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
