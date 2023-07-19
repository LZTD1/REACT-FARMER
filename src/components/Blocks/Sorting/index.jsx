import CategoriesSelect from './CategoriesSelector';
import PopupSelector from './PopupSelector';

import styles from './Sorting.module.scss';

function Sorting({ categoriesSorting, popupSorting }) {

  return (
    <div className={styles.root}>
      <CategoriesSelect
        categoriesSorting={categoriesSorting}
        categories={['Все', 'Крупы', 'Овощи', 'Фрукты', 'Молочные продукты', 'Мясо']}
      />
      <PopupSelector popupSorting={popupSorting} />
    </div>
  );
}
export default Sorting;
