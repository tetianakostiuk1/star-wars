import React, { FC } from 'react';
import classNames from 'classnames';

import s from './Pagination.module.scss';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // how many pages to show before and after the current page
  const pageRange = 2;

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    // always show the first page
    pages.push(1);

    // show ellipsis if current page is far from the start
    if (currentPage > pageRange + 2) {
      pages.push('...');
    }

    // show the previous pages, current page, and next pages
    for (
      let i = Math.max(2, currentPage - pageRange);
      i <= Math.min(totalPages - 1, currentPage + pageRange);
      i++
    ) {
      pages.push(i);
    }

    // show ellipsis if current page is far from the end
    if (currentPage < totalPages - pageRange - 1) {
      pages.push('...');
    }

    // always show the last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className={s.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={s.pagination__button}
      >
        Previous
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          className={classNames(s.pagination__button, {
            [s.active]: currentPage === page,
            [s.ellipsis]: page === '...',
          })}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={s.pagination__button}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
