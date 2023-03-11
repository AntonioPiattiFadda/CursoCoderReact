import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../productMook";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const filteredProduct = products.filter(
    (product) => product.category === categoryName
  );

  useEffect(() => {
    /* fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((res) => setItems(categoryName ? filteredProduct : products));*/

    const productList = new Promise((resolve, reject) => {
      resolve(setItems(categoryName ? filteredProduct : products));
    });
  }, [categoryName]);

  return (
    <div className={styles.itemListContainer}>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
