import React from 'react';
import { Link } from 'react-router-dom';

import styles from './productInSearch.module.scss';

function ProductInSearch({ type, price, photo, name, seller, city, id }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Link to={`/item/${id}`}>
      <div className={styles.root}>
        <img src={photo} alt={name} />

        <div className={styles.description}>
          <div>
            <span className={styles.name}>{name}</span>
            <span className={styles.price}>
              Цена: {price} ₽/{['Кг', 'Л', 'Шт'][type]}
            </span>
          </div>
          <span onClick={handleClick} className={styles.city}>
            {city}
          </span>
          <span onClick={handleClick} className={styles.sellerName}>
            {seller}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductInSearch;
