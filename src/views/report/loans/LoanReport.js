import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DistributionChart from './components/DistributionChart';
import Figures from './components/Figures';
import { fetchLoanReport } from 'src/services/report';
import { useEffect, useState } from 'react';
import ReportWrapper from '../components/ReportWrapper';

const LoanReport = () => {
  const [reportData, setReportData] = useState({
    typeDistributions: [],
  });

  const fetchReport = async (period) => {
    setReportData(await fetchLoanReport(period));
  };

  return (
    <PageContainer title="Báo cáo khoản vay">
      <ReportWrapper fetcher={fetchReport}>
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <Figures reportData={reportData} />
          </Grid>
          <Grid item lg={4}>
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
