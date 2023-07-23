import React from 'react';

import SortingMethods from '../components/Blocks/Sorting';
import ProductContainer from '../components/ProductContainer';
import Paginaton from '../components/Pagination';

function Home({ searchState }) {
  const [SearchValue] = searchState;
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
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
      `https://649d52b89bac4a8e669d91e8.mockapi.io/items?${category}&sortBy=${sortBy.orderBy}&order=${sortBy.sortBy}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [activeIndex, sortBy]);
  let products = items.filter((obj) => {
    if (obj.name.toLowerCase().includes(SearchValue.toLowerCase())) return true;
    return false;
  });

  return (
    <>
      <SortingMethods
        categoriesSorting={[activeIndex, (id) => setActiveIndex(id)]}
        popupSorting={[sortBy, (obj) => setSortBy(obj)]}
      />
      <h1 className="allProductDescription">Все продукты:</h1>
      <ProductContainer items={products} isLoading={isLoading} />
      <Paginaton />
    </>
  );
}

export default Home;
