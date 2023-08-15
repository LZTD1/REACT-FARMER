import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import SortingMethods from '../components/Blocks/Sorting';
import ProductContainer from '../components/ProductContainer';
import Paginaton from '../components/Blocks/Pagination/';
import { setPageNumber } from '../redux/slices/paginaton';
import { setCategoryId } from '../redux/slices/filter/category';
import { setSortingName_eng, setSortingOrderBy } from '../redux/slices/filter/popupSort';
import ModalProductWindow from '../components/ModalProductWindow/';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const activeIndex = useSelector((state) => state.categorySort.categoryId);
  const sortParams = useSelector((state) => state.popupSort.sort);
  const currentPage = useSelector((state) => state.paginaton.pageNumber);
  const modalActive = useSelector((state) => state.modalWindow.active);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const isFirstRender = React.useRef(true);
  const isChanged = React.useRef(false);

  React.useEffect(() => {
    if (
      searchParams.has('category') &&
      Number(searchParams.get('category')) !== Number(activeIndex)
    ) {
      dispatch(setCategoryId(searchParams.get('category')));
      isChanged.current = true;
    }
    if (searchParams.has('page') && Number(searchParams.get('page')) !== Number(currentPage)) {
      dispatch(setPageNumber(searchParams.get('page')));
      isChanged.current = true;
    }
    if (searchParams.has('name_eng') && searchParams.get('name_eng') !== sortParams.name_eng) {
      dispatch(setSortingName_eng(searchParams.get('name_eng')));
      isChanged.current = true;
    }
    if (searchParams.has('orderBy') && searchParams.get('orderBy') !== sortParams.orderBy) {
      dispatch(setSortingOrderBy(searchParams.get('orderBy')));
      isChanged.current = true;
    }
    if (!searchParams.has('category')) {
      isFirstRender.current = false;
    }
  }, []);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (isChanged.current) {
        return;
      }
    }

    setIsLoading(true);

    const category = Number(activeIndex) === 0 ? '' : `&category=${activeIndex}`;

    axios
      .get(
        `https://649d52b89bac4a8e669d91e8.mockapi.io/items?page=${currentPage}&limit=12${category}&sortBy=${sortParams.name_eng}&order=${sortParams.orderBy}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });

    setSearchParams({
      category: activeIndex,
      page: currentPage,
      name_eng: sortParams.name_eng,
      orderBy: sortParams.orderBy,
    });
  }, [activeIndex, sortParams, currentPage]);


  return (
    <>
      <ModalProductWindow />
      <SortingMethods />
      <h1 className="allProductDescription">Все продукты:</h1>
      <ProductContainer items={items} isLoading={isLoading} />
      <Paginaton />
    </>
  );
}

export default Home;
