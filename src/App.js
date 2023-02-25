import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Toni" />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
