import Carrito from "./components/Carrito";
import ItemListContainer from "./components/ItemListContainer";
import CarritoProvider from "./context/CarritoProvider";
import ProductsProvider from "./context/ProductsProvider";
function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <CarritoProvider>
          <ItemListContainer/>
          <Carrito />
        </CarritoProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
