import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import SortingMethods from '../components/Blocks/Sorting';
import ProductContainer from '../components/ProductContainer/';
import Paginaton from '../components/Blocks/Pagination/';
import { setPageNumber } from '../redux/slices/paginaton';
import {
  selectCategoryId,
  setCategoryId,
} from '../redux/slices/filter/category';
import {
  selectSort,
  setSortingName_eng,
  setSortingOrderBy,
} from '../redux/slices/filter/popupSort';
import { fetchItems } from '../redux/slices/homeItems';
import RejectedItems from '../components/Labels/RejectedItems/';
import EmptyItems from '../components/Labels/EmptyItems';
import { RootState, useAppDispatch } from '../redux/store';

function Home(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const activeIndex = useSelector(selectCategoryId);
  const sortParams = useSelector(selectSort);
  const currentPage = useSelector(
    (state: RootState) => state.paginaton.pageNumber
  );
  const { items, status } = useSelector((state: RootState) => state.homeItems);

  const isFirstRender = React.useRef(true);
  const isChanged = React.useRef(false);

  React.useEffect(() => {
    if (
      searchParams.has('category') &&
      Number(searchParams.get('category')) !== Number(activeIndex)
    ) {
      dispatch(
        setCategoryId(Number(searchParams.get('category')))
      );
      isChanged.current = true;
    }
    if (
      searchParams.has('page') &&
      Number(searchParams.get('page')) !== Number(currentPage)
    ) {
      dispatch(setPageNumber(Number(searchParams.get('page'))));
      isChanged.current = true;
    }
    const nameEng = searchParams.get('name_eng');
    if (nameEng !== null && nameEng !== sortParams.name_eng) {
      if (nameEng === 'ratingProduct' || nameEng === 'pricePerKG') {
        dispatch(setSortingName_eng(nameEng));
        isChanged.current = true;
      }
    }
    const OrderBy = searchParams.get('orderBy');
    if (OrderBy !== null && OrderBy !== sortParams.orderBy) {
      if (OrderBy === 'asc' || OrderBy === 'desc') {
        dispatch(setSortingOrderBy(OrderBy));
        isChanged.current = true;
      }
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
        currentPage: String(currentPage),
        category: category,
        name_eng: sortParams.name_eng,
        orderBy: sortParams.orderBy,
      })
    );

    window.scrollTo(0, 0);
    setSearchParams({
      category: String(activeIndex),
      page: String(currentPage),
      name_eng: String(sortParams.name_eng),
      orderBy: String(sortParams.orderBy),
    });
  }, [activeIndex, sortParams, currentPage]);

  let rejected = null;
  if (status.state === 'rejected') {
    if (status.meta === 'empty') {
      rejected = <EmptyItems />;
    } else {
      rejected = <RejectedItems />;
    }
  }

  return (
    <>
      <SortingMethods />
      <h1 className="allProductDescription">Все продукты:</h1>
      {rejected && rejected}
      {(status.state === 'pending' || status.state === 'fulfilled') && (
        <ProductContainer
          items={items}
          isLoading={status.state === 'pending'}
        />
      )}
      <Paginaton />
    </>
  );
}

export default Home;
