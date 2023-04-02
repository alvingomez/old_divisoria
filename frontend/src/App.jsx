import { useState } from 'react'
import data from './data';

function App() {  
  const dataProducts = data.products.map((product) => {
    const {name, slug, image, price} = product;
    return(
      <div className="product" key={slug}>
        <a href={`/product/${slug}`}>
          <img src={image} alt="" />
        </a>
        <div className="product-info">
        <a href={`/product/${slug}`}>
          <p>{name}</p>
          <p>{price}</p>
          <button>Add to cart</button>
        </a>
        </div>
      </div>
    )
  })

  return (
  <div>
  <header>
    <a href="/">divisoria</a>
  </header>
  <main>   
    <h1>Featured Products</h1>
    <div className="products">{dataProducts}</div>
  </main>
  </div>
  )
}

export default App
