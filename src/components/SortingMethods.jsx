import React from 'react';

function SortingMethods() {
  return (
    <div className="sortingMethods">
      <CategoriesSelect />
      <SortingBy />
    </div>
  );
}
function CategoriesSelect() {
  const categories = ['Все', 'Крупы', 'Овощи', 'Фрукты', 'Молочные продукты'];
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="sortingMethods__categories">
      {categories.map((value, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={activeIndex === index ? 'category active' : 'category'}>
          {value}
        </div>
      ))}
    </div>
  );
}

function SortingBy() {
  return (
    <div className="sortingMethods__sortingBy">
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"></path>
      </svg>
      <span className="sortingMethods__sortingBy__description">Отсортировать:</span>
      <PopupSorting />
    </div>
  );
}
function PopupSorting() {
  const [indexClickedSort, setIndexClickedSort] = React.useState(0);
  const [showPopupWindow, setShowPopupWindow] = React.useState(false);

  const sortingMethods = ['подешевле', 'подороже', 'популярные', 'менее популярные'];

  const popupHoverReaction = {
    transformOrigin: '0px 0px',
    opacity: showPopupWindow ? '1' : '0',
    scale: showPopupWindow ? '1' : '0.5',
  };

  return (
    <div
      onMouseLeave={() => setShowPopupWindow(false)}
      onMouseEnter={() => setShowPopupWindow(true)}
      className="popupSortingWindow">
      <span className="popupSortingWindow__selectedSorting">
        {sortingMethods[indexClickedSort]}
      </span>
      <div className="sortingMethod" style={popupHoverReaction}>
        {sortingMethods.map((sortingBy, id) => (
          <span
            className={indexClickedSort === id && 'active'}
            key={id}
            onClick={() => {
              setIndexClickedSort(id);
              setShowPopupWindow(false);
            }}>
            {sortingBy}
          </span>
        ))}
      </div>
    </div>
  );
}
export default SortingMethods;
