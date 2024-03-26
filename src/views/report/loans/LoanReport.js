import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DistributionChart from './components/DistributionChart';
import Figures from './components/Figures';
import { fetchLoanReport } from 'src/services/report';
import { useEffect, useState } from 'react';

const LoanReport = () => {
  const [reportData, setReportData] = useState({
    typeDistributions: [],
  });

  useEffect(() => {
    const fetchReport = async () => {
      setReportData(await fetchLoanReport({ year: 2024 }));
    };

    fetchReport();
  }, []);

  return (
    <PageContainer title="Báo cáo khoản vay">
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
    </PageContainer>
  );
};

export default LoanReport;
