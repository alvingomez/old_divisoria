import React from 'react';
import data from '../data';

const HomeScreen = () => {
  const dataProducts = data.products.map((product) => {
    const { name, slug, image, price } = product;
    return (
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
    );
  });
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">{dataProducts}</div>
    </div>
  );
};

export default HomeScreen;
