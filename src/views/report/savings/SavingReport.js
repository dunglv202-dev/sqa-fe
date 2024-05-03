import { Grid } from '@mui/material';
import { useCallback, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import useAuthorization from 'src/hooks/useAuthorization';
import ReportWrapper from '../components/ReportWrapper';
import Figures from './components/Figures';
import { fetchSavingReport } from 'src/services/report';

const SavingReport = () => {
  useAuthorization(['ROLE_MANAGER', 'ROLE_DIRECTOR']);

  const [reportData, setReportData] = useState({});

  const fetchReport = useCallback(async (period) => {
    setReportData(await fetchSavingReport(period));
  }, []);

  return (
    <PageContainer title="Báo cáo khoản vay">
      <ReportWrapper fetcher={fetchReport}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Figures reportData={reportData} />
          </Grid>
        </Grid>
      </ReportWrapper>
    </PageContainer>
  );
};

export default SavingReport;
