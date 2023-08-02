import React from 'react';

import styles from './productInSearch.module.scss';

function ProductInSearch({ type, pricePerKG, photo, name, sellerCity, sellerName }) {
  return (
    <div className={styles.root}>
      <img src={photo} />
      <div className={styles.description}>
          <div>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>
              Цена: {pricePerKG} ₽/{['Кг', 'Л', 'Шт'][type]}
            </span>
          </div>
          <span className={styles.city}>{sellerCity}</span>
          <span className={styles.sellerName}>{sellerName}</span>
        </div>
    </div>
  );
}

export default ProductInSearch;
