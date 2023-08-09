import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import SortingMethods from '../components/Blocks/Sorting';
import ProductContainer from '../components/ProductContainer';
import Paginaton from '../components/Blocks/Pagination/';

function Home() {
  const activeIndex = useSelector((state) => state.categorySort.categoryId);
  const sortBy = useSelector((state) => state.popupSort.sort);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);

    const category = activeIndex === 0 ? '' : `category=${activeIndex}`;

    axios
      .get(
        `https://649d52b89bac4a8e669d91e8.mockapi.io/items?page=${currentPage}&limit=12&${category}&sortBy=${sortBy.orderBy}&order=${sortBy.sortBy}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      }); 
  }, [activeIndex, sortBy, currentPage]);

  return (
    <>
      <SortingMethods />
      <h1 className="allProductDescription">Все продукты:</h1>
      <ProductContainer items={items} isLoading={isLoading} />
      <Paginaton onChange={(number) => setCurrentPage(number)} />
    </>
  );
}

export default Home;
