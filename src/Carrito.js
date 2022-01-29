import { useContexto } from "./miContexto";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import Formulario from "./Formulario";

const Carrito = () => {
  const { carrito, borrarDelCarrito, limpiarCarrito, finalizarCompra } =
    useContexto();
  console.log(carrito);

  return (
    <div>
      <div className="container">
        <h3>Tu compra</h3>
        {carrito.length > 0 ? (
          <ul>
            {carrito.map((producto) => {
              return (
                <li>
                  {producto.title}- {producto.precio}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() =>
                      borrarDelCarrito(producto.id, producto.cantidad)
                    }
                  >
                    Eliminar
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-info">No hay productos aún para mostrar</p>
        )}
        {/* {carrito.length > 0 ? <Formulario/> : null} */}

        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-warning"
                onClick={limpiarCarrito}
              >
                Limpiar carrito
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-success"
                onClick={finalizarCompra}
              >
                FINALIZAR COMPRA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
