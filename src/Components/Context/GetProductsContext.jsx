import React, { createContext, useEffect, useState } from "react";
import productsMook from "../../productMook";
const GetProductsContext = createContext();

const GetProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    setProducts(productsMook);
  });

  const data = {
    setSearchString,
    products,
  };

  return (
    <GetProductsContext.Provider value={data}>
      {children}
    </GetProductsContext.Provider>
  );
};

export default GetProductsContextProvider;
