import React from 'react';

import styles from './productInSearch.module.scss';

function ProductInSearch({ photo,name }) {
  return (
    <div className={styles.root}>
      <img src={photo} />
      <div className={styles.description}>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default ProductInSearch;
