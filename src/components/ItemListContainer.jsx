import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsProvider'
import Form from './Form'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const {mostrarForm,toggleShowForm} = useContext(ProductsContext)

  return (
    <div>
        <button onClick={toggleShowForm}> Agregar Producto</button>
        {mostrarForm && <Form/>}
        <ItemList/>
    </div>
  )
}

export default ItemListContainer