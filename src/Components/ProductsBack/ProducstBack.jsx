import React, { useEffect, useState } from "react";
import axios from "axios";

const ProducstBack = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //Hacemos la solicitud al backend.
    const data = axios.get("http://localhost:5000/products");
    data.then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, [products]);
  console.log(products);

  const addProduct = () => {
    axios.post("http://localhost:5000/products", newProduct);
  };

  const updateProduct = (id) => {
    axios.patch(`http://localhost:5000/products/${id}`, { title: "MIKE" });
  };

  const newProduct = {
    title: "MIKE 360",
    price: 66666,
    stock: 6,
    description: "THIS ARE THE BES son las mejores zapatillas",
    category: "deportivas",
    img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png",
  };
  return (
    <div
      style={{
        width: "100%",

        display: "flex",

        gap: "30px",

        justifyContent: "space-around",

        alignItems: "center",

        minHeight: "90vh",
      }}
    >
      {products.map((e) => {
        return (
          <div
            style={{
              width: "300px",

              height: "300px",

              border: "2px solid black",

              textAlign: "center",
            }}
          >
            <h2>{e.title}</h2>

            <img
              src={e.img}
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        );
      })}

      <button onClick={addProduct}>Crear producto</button>
      <button
        onClick={() => {
          updateProduct("2");
        }}
      >
        Upgrade producto
      </button>
    </div>
  );
};

export default ProducstBack;
