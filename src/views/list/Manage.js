import { Box, Grid } from '@mui/material';
import { IconCash, IconPigMoney } from '@tabler/icons';
import PageContainer from 'src/components/container/PageContainer';
import Option from 'src/components/shared/Option';

const Manage = () => {
  return (
    <PageContainer title="Theo dõi danh sách">
      <Box>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={6} lg={4}>
            <Option icon={IconPigMoney} title="Tài khoản tiết kiệm" path="/lists/savings" />
          </Grid>
          <Grid item xs={6} lg={4}>
            <Option icon={IconCash} title="Khoản vay" path="/lists/loans" />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Manage;
