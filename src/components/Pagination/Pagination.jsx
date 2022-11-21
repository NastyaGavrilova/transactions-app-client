import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../store/operations/transactions.operations';
import { selectPaginationPage } from '../../store/actions/transactions.action';
import sprite from '../../icons/sprite.svg';
import './_pagination.scss';
const Pagination = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  const totalPageCount = useSelector(state =>
    state.search &&
    state.search.transactions &&
    state.search.transactions.data &&
    state.search.transactions.data.totalPageCount
      ? state.search.transactions.data.totalPageCount
      : 1,
  );

  const { inputValue, paginationPage } = search;

  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    dispatch(
      getTransactions(
        inputValue.searchValue,
        inputValue.selectValue,
        paginationPage,
        14,
      ),
    );
  }, [paginationPage, dispatch]);

  const onHandleSelectPage = e => {
    e.preventDefault();
    const { value } = e.target;
    if (value === totalPageCount) return;
    dispatch(selectPaginationPage(value));
  };

  const onHandlePrevRange = () => {
    if (pageNumbers[0] === 1) return;
    setPageNumbers(() => {
      return pageNumbers.map(item => {
        item = item - 1;
        return item;
      });
    });
  };

  const onHandleNextRange = () => {
    setPageNumbers(() => {
      return pageNumbers.map(item => {
        item = item + 1;
        return item;
      });
    });
  };

  return (
    <div className={'c-pagination'}>
      <button
        type="button"
        className={'c-pagination__button'}
        onClick={onHandlePrevRange}
      >
        <svg
          className={`c-pagination__prev c-pagination__prev${
            pageNumbers[0] < 2 ? '--disabled' : '--active'
          }`}
        >
          <use href={sprite + '#Line10'} />
        </svg>
      </button>
      <ul className={'c-pagination__current-wrapper'}>
        {pageNumbers.map(item => {
          if (item <= totalPageCount) {
            return (
              <li key={item}>
                <button
                  type="button"
                  className={`c-pagination__current-item c-pagination__current-item--${
                    item === +paginationPage ? 'active' : 'disabled'
                  }`}
                  onClick={onHandleSelectPage}
                  value={item}
                >
                  {item}
                </button>
              </li>
            );
          } else {
            return;
          }
        })}
      </ul>
      <button
        type="button"
        className={'c-pagination__button'}
        onClick={onHandleNextRange}
      >
        <svg
          className={`c-pagination__next c-pagination__next${
            +paginationPage === +totalPageCount ? '--disabled' : '--active'
          }`}
        >
          <use href={sprite + '#Line9'} />
        </svg>
      </button>
    </div>
  );
};
export default Pagination;
