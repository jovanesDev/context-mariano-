import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsProvider'
import Item from './Item'

const ItemList = () => {

    const {products} = useContext(ProductsContext)

  return (
    <>
       {products.length > 0 && products.map(({id,nombre}) => (
            <Item  key={id} nombre={nombre}/>
       ))}
    </>
    )
  
}

export default ItemList