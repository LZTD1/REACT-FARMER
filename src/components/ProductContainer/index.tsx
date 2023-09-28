import React from 'react';
import ProductCart from './ProductCart';
import ProductSkeleton from './ProductCart/skeleton';

import styles from './ProductContainer.module.scss';
import { IPizzaItem } from '../../@types/MainTypes';

const SKELETON = [...new Array(12)].map((_, index) => (
  <ProductSkeleton key={index} />
));

interface IProductContainer {
  isLoading: boolean;
  items: IPizzaItem[];
}

const ProductContainer: React.FC<IProductContainer> = ({
  isLoading,
  items,
}) => {
  return (
    <div className={styles.productContainer}>
      {isLoading
        ? SKELETON
        : items.map((value, key) => <ProductCart key={key} {...value} />)}
    </div>
  );
};
export default ProductContainer;
