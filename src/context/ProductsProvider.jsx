import React, { createContext, useState } from "react";
//import { products } from '../constants'

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [mostrarForm, setMostrarForm] = useState(false);

  const toggleShowForm = () => setMostrarForm((prevState) => !prevState);

  const addProducto = (item) => {
    setProducts((prevState) => [
      ...prevState,
      { id: prevState.length, nombre: item },
    ]);
    toggleShowForm()
  };

  return (
    <ProductsContext.Provider value={{ products, mostrarForm, toggleShowForm,addProducto }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
