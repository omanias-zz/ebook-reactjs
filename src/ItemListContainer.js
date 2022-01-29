import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

const ItemListContainer = () => {
  let [lista, setLista] = useState([]);
  const { nombre } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");

    if (nombre) {
      const consulta = query(
        productosCollection,
        where("categoria", "==", nombre),
        where("precio", ">", 100)
      );
      /* await */ getDocs(consulta)
        .then(({ docs }) => {
          setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(productosCollection)
        .then(({ docs }) => {
          setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [nombre]);

  return (
    <div>
      <div className="row">
        <ItemList lista={lista} />
      </div>
    </div>
  );
};

export default ItemListContainer;
