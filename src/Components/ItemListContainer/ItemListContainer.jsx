import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import SyncLoader from "react-spinners/SyncLoader";
import { db } from "../../FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "products");
    let consulta = undefined;

    if (categoryName) {
      const q = query(
        itemCollection,
        where("category", "==", `${categoryName}`)
      );
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemCollection);
    }
    consulta.then((res) => {
      let products = res.docs.map((element) => {
        return {
          ...element.data(),
          id: element.id,
        };
      });
      setItems(products);
    });
  }, [categoryName]);

  return (
    <div className={styles.itemListContainer}>
      {items.length === 0 ? (
        <SyncLoader color="#36d7b7" />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
