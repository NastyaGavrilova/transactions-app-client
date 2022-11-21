import axios from 'axios';

const BASE_URL = 'https://transactions-app-server.herokuapp.com/';

const getTransactionsRequestToApi = async (
  searchQuery,
  filter,
  page = 1,
  limit = 14,
) => {
  try {
    const response = await axios.get('/api/transactions', {
      baseURL: BASE_URL,
      params: {
        searchQuery,
        filter,
        page,
        limit,
      },
    });

    return await response.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
};

export { getTransactionsRequestToApi };
