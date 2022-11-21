import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const transactions = useSelector(state =>
    state.search &&
    state.search.transactions &&
    state.search.transactions.data &&
    state.search.transactions.data.transactions
      ? state.search.transactions.data.transactions
      : [],
  );
  const isLoadingData = useSelector(state => state.search.loading);
  return (
    <>
      <div className="c-adaptive-table">
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
              <TableRow item={item} key={`table-row-${index}`} />
            ))}
          </tbody>
        </table>
        {isLoadingData && (
          <div className="c-table__loader">
            <h4 className="c-table__loading">Loading...</h4>
          </div>
        )}
        {!isLoadingData && transactions.length === 0 && (
          <div className="c-table__loader">
            <h4 className="c-table__loading">No Transactions</h4>
          </div>
        )}
      </div>
      <div>{transactions.length !== 0 && <Pagination />}</div>
    </>
  );
};

export default Table;
