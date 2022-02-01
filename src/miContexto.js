import { createContext, useContext, useState } from "react";
import swal from "sweetalert";

const contexto = createContext();

export const { Provider } = contexto;

export const useContexto = () => {
  return useContext(contexto);
};

const CustomProvider = ({ children }) => {
  const [precio_total, setPrecioTotal] = useState(0);
  const [cantidad_total, setCantidadTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, contador) => {
    const id = producto.id;
    if (isInCarrito(id)) {
      const copia_del_carrito = [...carrito];
      let match = copia_del_carrito.find((p) => p.id === producto.id);
      match.contador = match.contador + contador;
      setCarrito(copia_del_carrito);
    } else {
      const producto_con_cantidad = {
        ...producto,
        contador,
      };
      setCarrito([...carrito, producto_con_cantidad]);
    }
    setCantidadTotal(cantidad_total + contador);
  };

  const borrarDelCarrito = (id, cantidad) => {
    swal({
      title: "Estás seguro?",
      text: "Una vez eliminado deberas buscar el libro en la tienda nuevamente!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Producto eliminado!", {
          icon: "success",
        });
        let carritoFiltrado = carrito.filter((e) => e.id !== id);
        setCarrito(carritoFiltrado);
        setCantidadTotal(0);
      } else {
        swal("Tu producto está a salvo!");
      }
    });
  };

  const limpiarCarrito = () => {
    swal({
      title: "Deseas vaciar tu carrito?",
      text: "Una vez eliminados los productos deberas volver a la tienda a buscarlos!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Tu carrito está vacio!", {
          icon: "success",
        });

        setCarrito([]);
        setCantidadTotal(0);
      } else {
        swal("Tu carrito está a salvo!");
      }
    });
  };

  const isInCarrito = (id) => {
    return carrito.some((p) => p.id === id);
  };

  const valorDelContexto = {
    cantidad_total,
    carrito,
    precio_total,
    agregarAlCarrito,
    borrarDelCarrito,
    limpiarCarrito,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
