import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://transactions-app-server.herokuapp.com/api';

export const getTransactions = createAsyncThunk(
  'transactions/get-transactions',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions`, {
        params: { ...params },
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getTransactionByFilter = createAsyncThunk(
  'transactions/get-transaction-search',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions/search`, {
        params: { ...params },
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getTransactionsByBlockNumber = createAsyncThunk(
  'transactions/get-by-block-number',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions/searchByBlockNumber`, {
        params: { ...params },
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
