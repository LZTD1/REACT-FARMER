import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CategoriesSelector.module.scss';
import { selectCategoryId, setCategoryId } from '../../../../redux/slices/filter/category';

function CategoriesSelector({ categories }) {
  const activeIndex = useSelector(selectCategoryId);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      {categories.map((value, index) => (
        <div
          key={index}
          onClick={() => {
            dispatch(setCategoryId(index));
          }}
          className={Number(activeIndex) === index ? styles.active : ''}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default CategoriesSelector;
