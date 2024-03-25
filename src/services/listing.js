import { fetchApi } from './general';

export const fetchAllLoans = async (params) => {
  return await fetchApi({
    endpoint: '/api/v1/loans',
    params,
  });
};

export const fetchAllSavings = async (params) => {
  return await fetchApi({
    endpoint: '/api/v1/savings',
    params,
  });
};
