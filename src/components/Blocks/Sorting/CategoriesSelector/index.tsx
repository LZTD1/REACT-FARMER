import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './CategoriesSelector.module.scss';
import {
  selectCategoryId,
  setCategoryId,
} from '../../../../redux/slices/filter/category';

interface ICategory {
  category: string;
}
interface ICategories {
  categories: ICategory[];
}

const CategoriesSelector: React.FC<ICategories> = ({ categories }) => {
  const activeIndex = useSelector(selectCategoryId);
  const dispatch = useDispatch();

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
          {categoryObj.category}
        </div>
      ))}
    </div>
  );
};

export default CategoriesSelector;
