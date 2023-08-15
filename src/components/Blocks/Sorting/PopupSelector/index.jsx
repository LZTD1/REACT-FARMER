import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './PopupSelector.module.scss';
import { setSortingBy } from '../../../../redux/slices/filter/popupSort';

function PopupSelector() {
  const sortParams = useSelector((state) => state.popupSort.sort);
  const dispatch = useDispatch();

  const [showPopupWindow, setShowPopupWindow] = React.useState(false);

  const sortingMethods = [
    {
      name_ru: 'подешевле',
      name_eng: 'pricePerKG',
      orderBy: 'asc',
    },
    {
      name_ru: 'подороже',
      name_eng: 'pricePerKG',
      orderBy: 'desc',
    },
    {
      name_ru: 'менее популярные',
      name_eng: 'ratingProduct',
      orderBy: 'asc',
    },
    {
      name_ru: 'популярные',
      name_eng: 'ratingProduct',
      orderBy: 'desc',
    },
  ];
  return (
    <div className={styles.root}>
      <div className={styles.description}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"></path>
        </svg>
        Отсортировать:
      </div>
      <div className={styles.selector}>
        <span onClick={() => setShowPopupWindow(true)} className={styles.activeSelected}>
          {sortParams.name_ru}
        </span>
        {showPopupWindow && (
          <div onMouseLeave={() => setShowPopupWindow(false)} className={styles.selectorBlock}>
            {sortingMethods.map((obj, id) => (
              <span
                className={sortParams.name_ru === obj.name_ru && styles.active}
                key={id}
                onClick={() => {
                  dispatch(setSortingBy(obj));
                  setShowPopupWindow(false);
                }}>
                {obj.name_ru}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupSelector;
