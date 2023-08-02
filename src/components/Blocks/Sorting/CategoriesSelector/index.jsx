import React from 'react';

import styles from './CategoriesSelector.module.scss';
import { Context } from '../../../../screens/Home';

function CategoriesSelector({ categories }) {
  const { categoriesSorting } = React.useContext(Context);
  const [activeIndex, setActiveIndex] = categoriesSorting;

  return (
    <div className={styles.root}>
      {categories.map((value, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={activeIndex === index ? styles.active : ''}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default CategoriesSelector;
