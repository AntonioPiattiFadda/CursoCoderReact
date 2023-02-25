import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <img
        src="https://edicom.com.ar/dam/jcr:713680c7-7c2e-4145-bd94-2f7b5de20bd6/mercadolibre_integration.png"
        alt="Logo-Mercado-Libre"
        className="LogoPrincipal"
      />
      <ul className="navbar__u-list">
        <li>Electrodomesticos</li>
        <li>Jardineria</li>
        <li>Decoracion</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
