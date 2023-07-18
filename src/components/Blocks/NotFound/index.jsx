import React from 'react';

import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>4🫤4</h1>
      <span className={styles.notFoundText}>Страница не существует!</span>
      <br />
      <span className={styles.description}>Данная страница не существует на нашем сайте, возможно вы ввели не верный адрес</span>
    </div>
  );
}

export default NotFoundBlock;
