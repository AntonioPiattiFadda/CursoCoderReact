import React from "react";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Link to={`/itemDetail/${element.id}`} style={{ textDecoration: "none" }}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImageContainer}>
          <img className={styles.cardImage} src={element.img} alt="" />
        </div>
        <div className={styles.cardInformation}>
          <div className={styles.cardInformationContent}>
            <span>${element.price}</span>
            <span>224 | km</span>
            <span>{element.description}</span>
            <span>Capital Federal | Capital Federal</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
