import { fetchApi } from './general';

export const fetchAllLoans = async (params) => {
  return await fetchApi({
    endpoint: '/api/v1/loans',
    params,
  });
};

export const fetchLoan = async (id) => {
  return await fetchApi({
    endpoint: `/api/v1/loans/${id}`,
  });
};

export const fetchAllSavings = async (params) => {
  return await fetchApi({
    endpoint: '/api/v1/savings',
    params,
  });
};

export const fetchSaving = async (id) => {
  return await fetchApi({
    endpoint: `/api/v1/savings/${id}`,
  });
};
