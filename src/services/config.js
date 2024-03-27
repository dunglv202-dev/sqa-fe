import { fetchApi } from './general';

function getTerm(termInMonth) {
  switch (termInMonth) {
    case 1:
      return 'ONE_MONTH';
    case 2:
      return 'TWO_MONTHS';
    case 3:
      return 'THREE_MONTHS';
    case 6:
      return 'SIX_MONTHS';
    case 12:
      return 'TWELVE_MONTHS';
    case 18:
      return 'EIGHT_TEEN_MONTHS';
    case 24:
      return 'TWENTY_FOUR_MONTHS';
    case 36:
      return 'THIRTY_SIX_MONTHS';
  }
}

const configSaving = async ({ startDate, configs }) => {
  configs.forEach((cfg) => (cfg.term = getTerm(cfg.termInMonth)));

  await fetchApi({
    endpoint: '/api/v1/configs/saving',
    method: 'POST',
    payload: {
      startDate,
      configs,
    },
  });
};

const fetchSavingConfigs = async () => {
  return await fetchApi({
    endpoint: '/api/v1/configs/saving',
    method: 'GET',
  });
};

const configLoan = async ({ type, startDate, configs }) => {
  await fetchApi({
    endpoint: '/api/v1/configs/loan',
    method: 'POST',
    payload: {
      type,
      startDate,
      configs,
    },
  });
};

const fetchLoanConfigs = async (type) => {
  return await fetchApi({
    endpoint: '/api/v1/configs/loan',
    method: 'GET',
    params: {
      type,
    },
  });
};

const fetchUnresolvedConfig = async () => {
  return await fetchApi({
    endpoint: '/api/v1/configs/unresolved',
  });
};

export { configSaving, fetchSavingConfigs, fetchLoanConfigs, configLoan, fetchUnresolvedConfig };
