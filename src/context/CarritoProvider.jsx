import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [agregados, setAgregados] = useState([]);

  const addAgregados = (item) => {
    console.log(item);
    setAgregados([...agregados, item]);
  };

  const deleteItem = (item) => {
    setAgregados((prevState) =>
      prevState.filter((agregado) => agregado !== item)
    );
  };

  return (
    <CarritoContext.Provider value={{ agregados, addAgregados,deleteItem }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
