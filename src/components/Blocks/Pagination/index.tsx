import React from 'react';
import ReactPaginate from 'react-paginate';
import {  useSelector } from 'react-redux';

import styles from './pagination.module.scss';
import { setPageNumber } from '../../../redux/slices/paginaton';
import { RootState, useAppDispatch } from '../../../redux/store';

function Pagination(): JSX.Element {
  const pageData = useSelector((state : RootState) => ({
    allPages: state.paginaton.allPages,
    forcePage: state.paginaton.pageNumber,
  }));
  const dispatch = useAppDispatch();

  const setPage = (event: { selected: number }) => {
    dispatch(setPageNumber(event.selected + 1));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={setPage}
      pageRangeDisplayed={12}
      pageCount={pageData.allPages}
      forcePage={pageData.forcePage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
