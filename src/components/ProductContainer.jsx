import React from 'react';
import ProductBlock from './Blocks/Product';
import Skeleton from './Blocks/Product/skeleton';

const TYPE_OF_PRODUCT = ['Кг', 'Л', 'Шт'];
const SKELETON = [...new Array(8)].map((_, index) => (
  <Skeleton className="productContainer__item loader" key={index} />
));

function ProductContainer({ isLoading, items }) {
  return (
    <div className="productContainer">
      {isLoading
        ? SKELETON
        : items.map((value, key) => (
            <ProductBlock key={key} {...value} type={TYPE_OF_PRODUCT[value.type]} />
          ))}
    </div>
  );
}
export default ProductContainer;
