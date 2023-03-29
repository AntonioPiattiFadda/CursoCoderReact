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
    } else {
      alert("Solo tenemos .. elementos disponibles");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h2>{contador}</h2>
      <div>
        <button onClick={sumar}>Sumar</button>

        <button onClick={restar}>Restar</button>
      </div>
      <button onClick={() => onAdd(contador)}>Comprar ahora</button>
    </div>
  );
};

export default ItemCount;
