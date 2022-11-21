import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  searchTransactions,
  selectPaginationPage,
} from '../actions/transactions.action';

const initialInputValue = {
  searchValue: '',
  selectValue: '',
};

const initialPagination = 1;

const inputValue = createReducer(initialInputValue, {
  [searchTransactions]: (state, { payload }) => ({
    ...state,
    [payload.name]: payload.value,
  }),
});

const paginationPage = createReducer(initialPagination, {
  [selectPaginationPage]: (_, { payload }) => payload,
});

const transactions = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => ({ ...payload }),
});

const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsError]: () => false,
});

const error = createReducer(false, {
  [getTransactionsError]: (_, { payload }) => ({ ...payload }),
  [getTransactionsRequest]: () => false,
  [getTransactionsSuccess]: () => false,
});

const mainReducer = combineReducers({
  inputValue,
  paginationPage,
  transactions,
  error,
  loading,
});

export { mainReducer };
