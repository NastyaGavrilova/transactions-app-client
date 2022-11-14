import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as transactionsSelector from '../../store/selectors/transactions.selector';
import * as transactionsService from '../../store/services/transactions.service';
import { setPageOption } from '../../store/slices/transactions.slice';
import Pagination from '../Pagination/Pagination';
import TableRow from '../TableRow/TableRow';
import './_table.scss';
const Table = () => {
  const tableHeaderCells = [
    'Block Number',
    'Transaction ID',
    'Sender address',
    "Recipient's address",
    'Block confirmations',
    'Date',
    'Value',
    'Transaction Fee',
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [pageItemsLimit] = useState(14);
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelector.getTransactionsData);
  const transactionsCount = useSelector(
    transactionsSelector.getTransactionsCount,
  );
  const isLoadingData = useSelector(transactionsSelector.isLoadingTransactions);
  const filterOption = useSelector(
    transactionsSelector.getTransactionsFilterOption,
  );
  const searchQuery = useSelector(
    transactionsSelector.getTransactionsSearchQuery,
  );
  const handleCurrentPageChange = page => {
    setCurrentPage(page);
    dispatch(setPageOption(page));
  };

  useEffect(() => {
    if (filterOption === 'blockNumber') {
      dispatch(
        transactionsService.getTransactionsByBlockNumber({
          filterOption,
          searchQuery,
          currentPage,
          pageItemsLimit,
        }),
      );
    } else {
      dispatch(
        transactionsService.getTransactions({
          currentPage,
          pageItemsLimit,
        }),
      );
    }
  }, [currentPage, dispatch, pageItemsLimit]);
  return (
    <div>
      <table className="c-table">
        <thead className="c-table__header">
          <tr className="c-table__header-row">
            {tableHeaderCells.map((item, index) => (
              <th
                className={`c-table__header-cell c-table__header-cell-${index}`}
                key={`${item}-${index}`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, index) => (
            <TableRow item={item} />
          ))}
        </tbody>
      </table>
      {isLoadingData && <h4 className="c-table__loading">Loading...</h4>}
      {!isLoadingData && transactions.length === 0 && (
        <h4 className="c-table__loading">No Transactions</h4>
      )}
      <Pagination
        currentPage={currentPage}
        pageItemsLimit={pageItemsLimit}
        handleCurrentPageChange={handleCurrentPageChange}
      />
    </div>
  );
};

export default Table;
