import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../productMook";
import { CartContext } from "../Context/CartContext";
import styles from "./ItemDetailContainer.module.css";
import Swal from "sweetalert2";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, cart, getProductQuantityByID } = useContext(CartContext);

  const [item, setItem] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setItem({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (contador) => {
    const selectedProduct = {
      ...item,
      quantity: contador,
    };
    const duplicado = cart.some(
      (producto) => cart.title === selectedProduct.title
    );
    addToCart(selectedProduct);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Has añadido ${contador} ${item.title}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const initialValue = getProductQuantityByID(item.id);

  return (
    <div className={styles.container}>
      <ItemDetail onAdd={onAdd} item={item} initialValue={initialValue} />
    </div>
  );
};

export default ItemDetailContainer;
