import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsProvider";

const Form = () => {
  const [name, setName] = useState("");

  const { addProducto } = useContext(ProductsContext);

  return (
    <div>
        <h1>Formulario</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="nombre del producto"
      />
      <button onClick={() => addProducto(name)}>Agregar</button>
    </div>
  );
};

export default Form;
