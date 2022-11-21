import { createAction } from '@reduxjs/toolkit';

const searchTransactions = createAction('transactions/searchTransactions');
const selectPaginationPage = createAction('pagination/selectPaginationPage');
const getTransactionsRequest = createAction(
  'transactions/getTransactionsRequest',
);
const getTransactionsSuccess = createAction(
  'transactions/getTransactionsSuccess',
);
const getTransactionsError = createAction('transactions/getTransactionsError');

export {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  searchTransactions,
  selectPaginationPage,
};
