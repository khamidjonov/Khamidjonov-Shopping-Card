import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ products = [], addToBasket }) => {
  if (!products.length) {
    return <h1>Nothing here</h1>;
  }

  return (
    <div className="goods">
      {products.map((product) => {
        return (
          <ProductListItem
            key={product.id}
            {...product}
            addToBasket={addToBasket}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
