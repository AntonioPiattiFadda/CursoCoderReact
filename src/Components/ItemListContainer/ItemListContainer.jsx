import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import SyncLoader from "react-spinners/SyncLoader";
import { db } from "../../FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName, searchedItem } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    const itemCollection = collection(db, "products");
    let consulta = undefined;

    if (categoryName) {
      const q = query(
        itemCollection,
        where("category", "==", `${categoryName}`)
      );
      consulta = getDocs(q);
    } else if (searchedItem) {
      const searchedItemLowerCase = searchedItem.toLowerCase();
      const q = query(
        itemCollection,
        where("title", ">=", `${searchedItemLowerCase}`),
        where("title", "<=", `${searchedItemLowerCase}\uf8ff`)
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
      setLoading(false);
    });
  }, [categoryName, searchedItem]);

  useEffect(() => {
    const itemCollection = collection(db, "products");
    getDocs(itemCollection).then((res) => {
      let products = res.docs.map((element) => {
        return {
          ...element.data(),
          id: element.id,
        };
      });
      setItems(products);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.itemListContainer}>
      {!!loading ? <SyncLoader color="#36d7b7" /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
