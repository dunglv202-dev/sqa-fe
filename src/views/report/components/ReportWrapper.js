import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import PeriodSelect from './PeriodSelect';
import PeriodTypeSelect from './PeriodTypeSelect';

const ReportWrapper = ({ children, fetcher }) => {
  const [periodType, setPeriodType] = useState();
  const [period, setPeriod] = useState();

  useEffect(() => {
    if (!period) return;
    fetcher(period);
  }, [period, fetcher]);

  return (
    <>
      {!periodType && <PeriodTypeSelect onSelect={(type) => setPeriodType(type)} />}
      {periodType && (
        <Box>
          <Box marginBottom={5}>
            <PeriodSelect
              periodType={periodType}
              onChange={(periodData) => setPeriod(periodData)}
            />
          </Box>
          {children}
        </Box>
      )}
    </>
  );
};

export default ReportWrapper;
