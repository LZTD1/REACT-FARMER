import React from 'react';

import styles from './EmptyCart.module.scss';

function EmptyCart(): JSX.Element {
  return (
    <div className={styles.root}>
      <h1>&#128722;</h1>
      <span className={styles.text}>Ваша корзина пуста!</span>
      <br />
      <span className={styles.description}>
        Вернитесь на страницу выбора товаров, и оформите свой первый заказ
      </span>
    </div>
  );
}

export default EmptyCart;
