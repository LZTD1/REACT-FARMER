import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import React from 'react';

function Pagination() {
  const [activePage, setActivePage] = React.useState(0);
  const pages = [1, 2, 3];

  return (
    <div className="pagination">
      <GetPaginationPrevious />
      {pages.map((value, index) => (
        <span
          key={index}
          onClick={() => setActivePage(index)}
          className={index === activePage ? 'active' : ''}>
          {value}
        </span>
      ))}
      <GetPaginationNext />
    </div>
  );
}
function GetPaginationPrevious() {
  return <span>{'<'}</span>;
}
function GetPaginationNext() {
  return <span>{'>'}</span>;
}
export default Pagination;
