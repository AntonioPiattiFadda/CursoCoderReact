import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <Link to="/">
        <img
          src="https://edicom.com.ar/dam/jcr:713680c7-7c2e-4145-bd94-2f7b5de20bd6/mercadolibre_integration.png"
          alt="Logo-Mercado-Libre"
          className="LogoPrincipal"
        />
      </Link>
      <ul className="navbar__u-list">
        <Link to="/category/deportivas" style={{ textDecoration: "none" }}>
          Deportivas
        </Link>
        <Link to="/category/urbanas" style={{ textDecoration: "none" }}>
          Urbanas
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          Todas
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
