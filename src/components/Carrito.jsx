import { useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider";

const Carrito = () => {
  const { agregados, deleteItem } = useContext(CarritoContext);

  return (
    <div>
      <>
        <h1>Carrito</h1>
      </>
      {agregados.length > 0 ? (
        agregados.map((item) => (
          <li key={item} style={{margin:'20px'}}>
            {item} 
            <button onClick={() => deleteItem(item)}>
                Eliminar
            </button>
          </li>
        ))
      ) : (
        <p>Carrito Vacio</p>
      )}
    </div>
  );
};

export default Carrito;
