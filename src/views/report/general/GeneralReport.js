import { Grid, Typography, styled, useTheme } from '@mui/material';
import { IconCash, IconCreditCard, IconCurrencyDollar, IconPigMoney } from '@tabler/icons';
import { useCallback, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import useAuthorization from 'src/hooks/useAuthorization';
import { fetchGeneralReport } from 'src/services/report';
import ReportWrapper from '../components/ReportWrapper';
import ReportCard from './components/ReportCard';

const Figure = styled(Typography)(({ theme }) => ({
  display: 'inline',
  color: theme.palette.text.secondary,
  fontWeight: 600,
  fontSize: '2rem',
  position: 'relative',
  top: '3px',
  marginRight: '5px',
}));

const GeneralReport = () => {
  useAuthorization(['ROLE_MANAGER', 'ROLE_DIRECTOR']);

  const theme = useTheme();
  const [reportData, setReportData] = useState({});

  const IconCredit = () => <IconCreditCard size={50} color={theme.palette.primary.main} />;
  const IconMoney = () => <IconCash size={50} color={theme.palette.primary.main} />;
  const IconPig = () => <IconPigMoney size={50} color={theme.palette.primary.main} />;
  const IconDollar = () => <IconCurrencyDollar size={50} color={theme.palette.primary.main} />;

  const fetchReport = useCallback(async (period) => {
    setReportData(await fetchGeneralReport(period));
  }, []);

  return (
    <PageContainer title="Báo cáo tổng quan">
      <ReportWrapper fetcher={fetchReport}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <ReportCard icon={IconCredit}>
              <Figure>{reportData.numberOfLoan}</Figure> khoản vay
            </ReportCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ReportCard icon={IconMoney}>
              <Figure>{reportData.lendingAmount}</Figure> cho vay
            </ReportCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ReportCard icon={IconPig}>
              <Figure>{reportData.numberOfSaving}</Figure> sổ tiết kiệm được mở
            </ReportCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ReportCard icon={IconDollar}>
              <Figure>{reportData.savingDepositAmount}</Figure> tiền gửi tiết kiệm
            </ReportCard>
          </Grid>
        </Grid>
      </ReportWrapper>
    </PageContainer>
  );
};

export default GeneralReport;
