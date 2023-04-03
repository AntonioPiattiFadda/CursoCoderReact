import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

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
      setCategories([firstCategory, ...otherCategories]);
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
      <ul className={styles.navbar__uList}>
        {" "}
        {categories.map((category) => {
          return (
            <li key={category.id} className={styles.navbar__listItem}>
              {" "}
             
              <Link to={category.path} className={styles.navbar__link}>
                {" "}
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
