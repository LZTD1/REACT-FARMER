import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';

function Pagination({ onChange }) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChange(e.selected + 1)}
      pageRangeDisplayed={12}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
