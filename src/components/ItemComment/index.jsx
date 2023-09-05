import React from 'react';

import styles from './ItemComment.module.scss';

function ItemComment() {
  const name = 'Данил П.';

  return (
    <div className={styles.root}>
      <div className={styles.HeaderComment}>
        <div className={styles.PhotoAndName}>
          <div className={styles.photo}>
            <span>{name[0]}</span>
          </div>
          <span className={styles.userName}>{name}</span>
        </div>
        <span className={styles.dateComment}>2 Апреля 2023</span>
        <span className={styles.rating}>⭐⭐⭐</span>
      </div>
    </div>
  );
}

export default ItemComment;
