import CategoriesSelect from './CategoriesSelector';
import PopupSelector from './PopupSelector';

import styles from './Sorting.module.scss';

function Sorting() : JSX.Element {
  return (
    <div className={styles.root}>
      <CategoriesSelect
        categories={['Все', 'Крупы', 'Овощи', 'Фрукты', 'Молочные продукты', 'Мясо']}
      />
      <PopupSelector />
    </div>
  );
}
export default Sorting;
