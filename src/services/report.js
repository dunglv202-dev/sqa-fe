import { fetchApi } from './general';

export const fetchGeneralReport = async ({ year, quarter, month }) => {
  return await fetchApi({
    endpoint: '/api/v1/reports/general',
    params: { year, quarter, month },
  });
};
