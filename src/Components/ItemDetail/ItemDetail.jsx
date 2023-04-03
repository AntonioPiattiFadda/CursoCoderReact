import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ onAdd, item, initialValue }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.cardImage} src={item.img} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.cardTitle}>{item.title}</h1>
        <span className={styles.price}>${item.price}</span>
        <span className={styles.freeShipping}>Llega gratis el martes</span>
        <span className={styles.freeReturns}>Devolución gratis</span>
        <ItemCount
          onAdd={onAdd}
          stock={item.stock}
          initialValue={initialValue}
        />
      </div>
    </div>
  );
};

export default ItemDetail;

