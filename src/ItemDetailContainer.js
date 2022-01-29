import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  let [producto, setProducto] = useState();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const refDoc = doc(productosCollection, id);

    getDoc(refDoc)
      .then((resultado) => {
        setProducto(resultado.data());
      })
      .catch((error) => {});
  }, [id]);

  return <>{producto && <ItemDetail producto={producto} />}</>;
};

export default ItemDetailContainer;
