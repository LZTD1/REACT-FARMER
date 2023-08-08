import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CategoriesSelector.module.scss';
import { setCategoryId } from '../../../../redux/slices/filter/category';

function CategoriesSelector({ categories }) {
  const activeIndex = useSelector((state) => state.categorySort.categoryId);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      {categories.map((value, index) => (
        <div
          key={index}
          onClick={() => {
            dispatch(setCategoryId(index));
          }}
          className={activeIndex === index ? styles.active : ''}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default CategoriesSelector;
