import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CategoriesSelector.module.scss';
import {
  selectCategoryId,
  setCategoryId,
} from '../../../../redux/slices/filter/category';
import { useAppDispatch } from '../../../../redux/store';

interface ICategories {
  categories: string[];
}

const CategoriesSelector: React.FC<ICategories> = ({ categories }) => {
  const activeIndex = useSelector(selectCategoryId);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      {categories.map((categoryObj, index: number) => (
        <div
          key={index}
          onClick={() => {
            dispatch(setCategoryId(index));
          }}
          className={Number(activeIndex) === index ? styles.active : ''}
        >
          {categoryObj}
        </div>
      ))}
    </div>
  );
};

export default CategoriesSelector;
