import React from 'react';

import styles from './EmptyComments.module.scss';

function EmptyComments(): JSX.Element {
  return (
    <div className={styles.root}>
      <h1>Здесь ничего нет...</h1>
      <span>Оставьте свой первый отзыв!</span>
    </div>
  );
}

export default EmptyComments;
