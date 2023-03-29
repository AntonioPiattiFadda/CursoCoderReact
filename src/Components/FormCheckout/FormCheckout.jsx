import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const FormCheckout = ({ getCartTotalPrice, cart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getCartTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    console.log(order);
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => console.log(res.id))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input name="name" onChange={handleChange} type="text"></input>
        <input name="email" onChange={handleChange} type="text"></input>
        <input name="phone" onChange={handleChange} type="text"></input>
        <button type="submit">Realizar la compra</button>
      </form>
    </div>
  );
};

export default FormCheckout;
