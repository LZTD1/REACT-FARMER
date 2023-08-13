import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import styles from './pagination.module.scss';
import { setPageNumber } from '../../../redux/slices/paginaton';

function Pagination() {
  const pageData = useSelector((state) => ({
    allPages: state.paginaton.allPages,
    forcePage: state.paginaton.pageNumber,
  }));
  const dispatch = useDispatch();

  const setPage = (event) => {
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
