import React from 'react';

import styles from './productInSearch.module.scss';

function ProductInSearch({ type, price, photo, name, seller, city }) {



  return (
    <div className={styles.root}>
      <img src={photo} alt={name}/>
      <div className={styles.description}>
          <div>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>
              Цена: {price} ₽/{['Кг', 'Л', 'Шт'][type]}
            </span>
          </div>
          <span className={styles.city}>{city}</span>
          <span className={styles.sellerName}>{seller}</span>
        </div>
    </div>
  );
}

export default ProductInSearch;
