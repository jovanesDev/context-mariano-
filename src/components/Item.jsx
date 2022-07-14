import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoProvider'

const Item = ({nombre}) => {

    const {addAgregados} = useContext(CarritoContext)

  return (
    <div style={{margin:'20px'}}>
    <li>{nombre}</li>
    <button onClick={() => addAgregados(nombre)}>Agregar</button>
    </div>
  )
}

export default Item