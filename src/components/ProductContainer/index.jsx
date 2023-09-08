import React from 'react';
import ProductCart from './ProductCart';
import ProductSkeleton from './ProductCart/skeleton';

import styles from './ProductContainer.module.scss';

const SKELETON = [...new Array(12)].map((_, index) => (
  <ProductSkeleton key={index} />
));

function ProductContainer({ isLoading, items }) {
  return (
    <div className={styles.productContainer}>
      {isLoading
        ? SKELETON
        : items.map((value, key) => (
            <ProductCart
              key={key}
              {...value}
            />
          ))}
    </div>
  );
}
export default ProductContainer;
