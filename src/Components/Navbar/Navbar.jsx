import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "category");
    getDocs(itemCollection).then((res) => {
      let newCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      let firstCategory = newCategories.find(
        (category) => category.title === "Todas"
      );
      let otherCategories = newCategories.filter(
        (category) => category.title !== "Todas"
      );

      //// TERMINAR ACA!!!
      setCategories([...otherCategories, ...firstCategory]);
    });
  }, []);

  return (
    <div className="navbar__container">
      <Link to="/">
        <img
          src="https://edicom.com.ar/dam/jcr:713680c7-7c2e-4145-bd94-2f7b5de20bd6/mercadolibre_integration.png"
          alt="Logo-Mercado-Libre"
          className="LogoPrincipal"
        />
      </Link>
      <SearchBar />
      <ul className="navbar__u-list">
        {categories.map((category) => {
          return (
            <Link to={category.path} style={{ textDecoration: "none" }}>
              {category.title}
            </Link>
          );
        })}
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
