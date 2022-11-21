import { getTransactionsRequestToApi } from '../services/transactions.service';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from '../actions/transactions.action';

const getTransactions =
  (...queryParams) =>
  async dispatch => {
    dispatch(getTransactionsRequest());
    try {
      const methods = await getTransactionsRequestToApi(...queryParams);

      dispatch(getTransactionsSuccess(methods));
    } catch (error) {
      dispatch(getTransactionsError(error));
    }
  };

export { getTransactions };
