import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import SortingMethods from '../components/Blocks/Sorting';
import ProductContainer from '../components/ProductContainer/';
import Paginaton from '../components/Blocks/Pagination/';
import { setPageNumber } from '../redux/slices/paginaton';
import { setCategoryId } from '../redux/slices/filter/category';
import {
  setSortingName_eng,
  setSortingOrderBy,
} from '../redux/slices/filter/popupSort';
import ModalProductWindow from '../components/ModalProductWindow/';
import { fetchItems } from '../redux/slices/homeItems';
import RejectedItems from '../components/Labels/RejectedItems/';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const activeIndex = useSelector((state) => state.categorySort.categoryId);
  const sortParams = useSelector((state) => state.popupSort.sort);
  const currentPage = useSelector((state) => state.paginaton.pageNumber);
  const { items, status } = useSelector((state) => state.homeItems);

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
    if (
      searchParams.has('page') &&
      Number(searchParams.get('page')) !== Number(currentPage)
    ) {
      dispatch(setPageNumber(searchParams.get('page')));
      isChanged.current = true;
    }
    if (
      searchParams.has('name_eng') &&
      searchParams.get('name_eng') !== sortParams.name_eng
    ) {
      dispatch(setSortingName_eng(searchParams.get('name_eng')));
      isChanged.current = true;
    }
    if (
      searchParams.has('orderBy') &&
      searchParams.get('orderBy') !== sortParams.orderBy
    ) {
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

    const category =
      Number(activeIndex) === 0 ? '' : `&category=${activeIndex}`;

    dispatch(
      fetchItems({
        currentPage,
        category,
        name_eng: sortParams.name_eng,
        orderBy: sortParams.orderBy,
      })
    );

    window.scrollTo(0, 0);
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
      {status === 'rejected' ? (
        <RejectedItems />
      ) : (
        <ProductContainer items={items} isLoading={status === 'pending'} />
      )}
      <Paginaton />
    </>
  );
}

export default Home;
