import { fetchApi } from './general';

export const fetchAllLoans = async () => {
  return await fetchApi({
    endpoint: '/api/v1/loans',
  });
};
