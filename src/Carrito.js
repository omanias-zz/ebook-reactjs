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
  const { carrito, borrarDelCarrito, limpiarCarrito, precio_total } =
    useContexto();

  return (
    <div>
      <div className="container">
        <h3>Tu compra</h3>
        {carrito.length > 0 ? (
          <ul>
            {carrito.map((producto, indice) => {
              return (
                <li key={indice}>
                  <div className="container">
                    <div className="row">
                      <div className="col">Titulo: {producto.title}</div>
                      <div className="col">Precio: $ {producto.precio}</div>
                      <div className="col">Unidades: {producto.contador}</div>

                      <div class="col">
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            borrarDelCarrito(producto.id, producto.cantidad)
                          }
                        >
                          Eliminar
                        </button>
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={limpiarCarrito}
                        >
                          Limpiar carrito
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-info">No hay productos aún para mostrar</p>
        )}
        {carrito.length > 0 ? <Formulario /> : null}
      </div>
    </div>
  );
};

export default Carrito;
