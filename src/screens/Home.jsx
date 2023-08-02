import React from 'react';

import SortingMethods from '../components/Blocks/Sorting';
import ProductContainer from '../components/ProductContainer';
import Paginaton from '../components/Blocks/Pagination/';

export const Context = React.createContext();

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState({
    name: 'популярные',
    orderBy: 'ratingProduct',
    sortBy: 'desc',
  });
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    setIsLoading(true);

    const category = activeIndex === 0 ? '' : `category=${activeIndex}`;

    fetch(
      `https://649d52b89bac4a8e669d91e8.mockapi.io/items?page=${currentPage}&limit=12&${category}&sortBy=${sortBy.orderBy}&order=${sortBy.sortBy}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [activeIndex, sortBy, currentPage]);

  return (
    <Context.Provider
      value={{
        categoriesSorting: [activeIndex, setActiveIndex],
        popupSorting: [sortBy, setSortBy],
      }}>
      <SortingMethods />
      <h1 className="allProductDescription">Все продукты:</h1>
      <ProductContainer items={items} isLoading={isLoading} />
      <Paginaton onChange={(number) => setCurrentPage(number)} />
    </Context.Provider>
  );
}

export default Home;
