import { Box, Grid, Typography, styled, useTheme } from '@mui/material';
import { IconCash, IconCreditCard, IconCurrencyDollar, IconPigMoney } from '@tabler/icons';
import { useEffect, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import { fetchGeneralReport } from 'src/services/report';
import ReportCard from './components/ReportCard';
import PeriodSelect from '../components/PeriodSelect';
import PeriodTypeSelect from '../components/PeriodTypeSelect';

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
  const theme = useTheme();
  const [reportData, setReportData] = useState({});
  const [periodType, setPeriodType] = useState();
  const [period, setPeriod] = useState();

  const IconCredit = () => <IconCreditCard size={50} color={theme.palette.primary.main} />;
  const IconMoney = () => <IconCash size={50} color={theme.palette.primary.main} />;
  const IconPig = () => <IconPigMoney size={50} color={theme.palette.primary.main} />;
  const IconDollar = () => <IconCurrencyDollar size={50} color={theme.palette.primary.main} />;

  useEffect(() => {
    if (!period) return;

    const fetchReport = async () => {
      setReportData(await fetchGeneralReport(period));
    };

    fetchReport();
  }, [period]);

  return (
    <PageContainer title="Báo cáo tổng quan">
      {!periodType && <PeriodTypeSelect onSelect={(type) => setPeriodType(type)} />}
      {periodType && (
        <Box>
          <Box marginBottom={5}>
            <PeriodSelect
              periodType={periodType}
              onChange={(periodData) => setPeriod(periodData)}
            />
          </Box>
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
        </Box>
      )}
    </PageContainer>
  );
};

export default GeneralReport;
