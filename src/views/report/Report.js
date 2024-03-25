import { Box, Grid } from '@mui/material';
import { IconCash, IconPigMoney, IconReport } from '@tabler/icons';
import PageContainer from 'src/components/container/PageContainer';
import Option from 'src/components/shared/Option';

const Report = () => {
  return (
    <PageContainer title="Báo cáo">
      <Box>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={6} lg={4}>
            <Option icon={IconReport} title="Báo cáo tổng quan" path="/reports/general" />
          </Grid>
          <Grid item xs={6} lg={4}>
            <Option icon={IconCash} title="Báo cáo các khoản vay" path="/reports/loans" />
          </Grid>
          <Grid item xs={6} lg={4}>
            <Option icon={IconPigMoney} title="Báo cáo các sổ tiết kiệm" path="/reports/savings" />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Report;
