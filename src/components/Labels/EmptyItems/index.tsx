import React from 'react';

import styles from './EmptyItems.module.scss';

function EmptyItems(): JSX.Element {
  return (
    <div className={styles.root}>
      <h1>&#128269;</h1>
      <span className={styles.text}>Ничего не нашлось!</span>
      <br />
      <span className={styles.description}>
        Вероятно вы ошиблись с ссылкой, или товары в данной категории полностью
        закончились
      </span>
    </div>
  );
}

export default EmptyItems;
