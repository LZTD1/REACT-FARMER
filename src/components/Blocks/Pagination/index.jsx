import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import styles from './pagination.module.scss';
import { setPageNumber } from '../../../redux/slices/paginaton';

function Pagination() {
  const allPages = useSelector((state) => state.paginaton.allPages);
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
      pageCount={allPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
