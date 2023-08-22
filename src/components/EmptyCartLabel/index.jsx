import React from 'react';

import styles from './EmptyCartLabel.module.scss';

function EmptyCartLabel() {
  return (
    <div className={styles.root}>
      <h1>&#128722;</h1>
      <span className={styles.text}>Ваша корзина пуста!</span>
      <br />
      <span className={styles.description}>
        Вернитесь на страницу выбора товаров, и оформите свой первый зака
      </span>
    </div>
  );
}

export default EmptyCartLabel;
