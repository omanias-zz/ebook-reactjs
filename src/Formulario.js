import { useContexto } from "./miContexto";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import swal from "sweetalert";

const Formulario = () => {
  const { carrito, limpiarCarrito } = useContexto();

  const finalizarCompra = () => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      buyer: {
        name: "Omar",
        lastName: "Manias",
        email: "ojmanias1985@gmail.com",
      },
      items: carrito,
      date: serverTimestamp(),
      total: 100,
    }).then((resultado) => {
      swal("Gracias por tu compra!", "Tus datos fueron almacenados", "success");
      // limpiarCarrito();
    });
  };

  return (
    <>
      <div className="formulario">
        <h5>Completa el siguiente formulario con tus datos</h5>
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre y apellido"
          />
        </div>
        <div className="form-group mb-4">
          <input type="text" class="form-control" placeholder="Teléfono" />
        </div>
        <div className="form-group mb-4">
          <input type="text" class="form-control" placeholder="E-mail" />
        </div>
        <div className="container-compra">
          <button
            type="button"
            className="btn btn-success"
            onClick={finalizarCompra}
          >
            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </>
  );
};

export default Formulario;
