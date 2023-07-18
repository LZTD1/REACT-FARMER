import React from 'react';

import styles from './CategoriesSelector.module.scss';

function CategoriesSelector({ categories }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className={styles.root}>
      {categories.map((value, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={activeIndex === index && styles.active}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default CategoriesSelector;
