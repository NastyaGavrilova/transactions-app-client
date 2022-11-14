import { createSlice } from '@reduxjs/toolkit';
import * as transactionsServices from '../services/transactions.service';

const initialState = {
  transactionsData: [],
  count: 0,
  isLoadingTransactions: false,
  currentPage: 1,
  pageItemsLimit: 14,
  filterOption: 'adress',
  searchQuery: '',
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setFilterOption: (state, action) => {
      state.filterOption = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPageOption: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimitOption: (state, action) => {
      state.pageItemsLimit = action.payload;
    },
  },
  extraReducers: {
    // Transactions Data
    [transactionsServices.getTransactions.pending](state, _) {
      state.isLoadingTransactions = true;
    },
    [transactionsServices.getTransactions.fulfilled](state, action) {
      state.transactionsData = action.payload.result;
      state.count = action.payload.count;
      state.isLoadingTransactions = false;
    },
    [transactionsServices.getTransactions.rejected](state, action) {
      state.transactionsData = [];
      state.isLoadingTransactions = false;
    },
    //Get transactions by filter
    [transactionsServices.getTransactionByFilter.pending](state, _) {
      state.isLoadingTransactions = true;
    },
    [transactionsServices.getTransactionByFilter.fulfilled](state, action) {
      state.transactionsData = action.payload.result;
      state.count = action.payload.count;
      state.isLoadingTransactions = false;
    },
    [transactionsServices.getTransactionByFilter.rejected](state, action) {
      state.transactionsData = [];
      state.count = 0;
      state.isLoadingTransactions = false;
    },
    //Get transactions by block number
    [transactionsServices.getTransactionsByBlockNumber.pending](state, _) {
      state.isLoadingTransactions = true;
    },
    [transactionsServices.getTransactionsByBlockNumber.fulfilled](
      state,
      action,
    ) {
      state.transactionsData = action.payload.result;
      state.count = action.payload.count;
      state.isLoadingTransactions = false;
    },
    [transactionsServices.getTransactionsByBlockNumber.rejected](
      state,
      action,
    ) {
      state.transactionsData = [];
      state.isLoadingTransactions = false;
    },
  },
});

export const {
  setFilterOption,
  setSearchQuery,
  setPageOption,
  setLimitOption,
} = transactionsSlice.actions;
