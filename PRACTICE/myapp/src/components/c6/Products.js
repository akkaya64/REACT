import React from 'react'
import fruits from './fruits'

const Products = () => {
    const listProducts = fruits.map((fruit, index) => (
        <li key={index} style={{color: fruit.isFruit ? "crimson" : "darkcyan"}}>{fruit.title}</li>
    ))
  return (
    <> <h1>Products</h1>
    <ol>{listProducts}</ol></>
   
  )
}

export default Products