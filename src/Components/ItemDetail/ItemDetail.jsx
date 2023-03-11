import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../productMook";
import ItemCount from "../ItemCount/ItemCount";
import styles from './ItemDetail.module.css'

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItems] = useState({});
  const filteredProduct = products.find((item) => item.id === parseInt(id));
  console.log(filteredProduct);
  useEffect(() => {
    setItems(filteredProduct);
    console.log(filteredProduct.stock);
  }, []);
  const onAdd = (contador) => {
    console.log(`Has comprado ${contador} elementos`);
  };
  return (
    <div className={styles.container}>
    <div className={styles.cardContainer}>
      <h1 className={styles.cardTitle}>{item.title}</h1>
      <img className={styles.cardImage} src={item.img} alt="" />
      <ItemCount onAdd={onAdd} stock={filteredProduct.stock} />
    </div>
    </div>
  );
};

export default ItemDetail;
