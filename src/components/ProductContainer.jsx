import React from 'react';
import ProductBlock from './Blocks/Product';
import Skeleton from './Blocks/Product/skeleton';

function ProductContainer({ isLoading, items }) {
  const typeOfProduct = ['Кг', 'Л', 'Шт'];
  // 0 kg 1 litr 2 pieces

  return (
    <div className="productContainer">
      {isLoading
        ? [...new Array(8)].map((_, index) => (
            <Skeleton className="productContainer__item loader" key={index} />
          ))
        : items.map((value, key) => (
            <ProductBlock key={key} {...value} type={typeOfProduct[value.type]} />
          ))}
    </div>
  );
}
export default ProductContainer;
