import { Grid } from '@mui/material';
import { useCallback, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import { fetchLoanReport } from 'src/services/report';
import ReportWrapper from '../components/ReportWrapper';
import DistributionChart from './components/DistributionChart';
import Figures from './components/Figures';
import useAuthorization from 'src/hooks/useAuthorization';

const LoanReport = () => {
  useAuthorization(['ROLE_MANAGER', 'ROLE_DIRECTOR']);

  const [reportData, setReportData] = useState({
    typeDistributions: [],
  });

  const fetchReport = useCallback(async (period) => {
    setReportData(await fetchLoanReport(period));
  }, []);

  return (
    <PageContainer title="Báo cáo khoản vay">
      <ReportWrapper fetcher={fetchReport}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Figures reportData={reportData} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <DistributionChart
              items={reportData.typeDistributions.map((entry) => ({
                label: entry.type === 'SECURED' ? 'Vay thế chấp' : 'Vay tín chấp',
                value: entry.totalAmount,
              }))}
            />
          </Grid>
        </Grid>
      </ReportWrapper>
    </PageContainer>
  );
};

export default LoanReport;
