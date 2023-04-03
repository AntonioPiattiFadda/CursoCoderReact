import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);
  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.counter}>{contador}</h2>
      <span className={styles.stock}>({stock} disponibles)</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={sumar}>
          +
        </button>
        <button className={styles.button} onClick={restar}>
          -
        </button>
      </div>
      <button className={styles.buyButton} onClick={() => onAdd(contador)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
