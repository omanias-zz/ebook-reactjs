import { useState } from "react";
import swal from "sweetalert";

const ItemCount = ({ stock, initial, onAdd }) => {
  let [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador >= stock) {
      swal("Stock insuficiente!", "Prueba con una cantidad menor!");
    } else {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador <= initial) {
      swal("Oops!", "La cantidad mínima es de 1 producto!");
    } else {
      setContador(contador - 1);
    }
  };

  const agregarItem = () => {
    swal("Muy bien!", "Producto agregado a tu carrito!", "success");
    setContador(initial);
    onAdd(contador);
  };

  return (
    <>
      <div className="container-btn">
        <p>Productos: {contador}</p>

        <div className="container">
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={sumar}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={restar}
          >
            -
          </button>
        </div>

        <button className="btn btn-info" onClick={agregarItem}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
