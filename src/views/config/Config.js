import { Box, Grid } from '@mui/material';
import { IconBuildingWarehouse, IconCreditCard, IconPigMoney } from '@tabler/icons';
import PageContainer from 'src/components/container/PageContainer';
import Option from 'src/components/shared/Option';

const Config = () => {
  return (
    <PageContainer title="Cấu hình">
      <Box>
        <Grid container justifyContent="center" paddingTop={15} spacing={3}>
          <Grid item xs={6} lg={4}>
            <Option
              icon={IconCreditCard}
              title="Biểu lãi cho vay tín chấp"
              path="/configs/loans/unsecured"
            />
          </Grid>
          <Grid item xs={6} lg={4}>
            <Option
              icon={IconBuildingWarehouse}
              title="Biểu lãi cho vay thế chấp"
              path="/configs/loans/secured"
            />
          </Grid>
          <Grid item xs={6} lg={4}>
            <Option icon={IconPigMoney} title="Biểu lãi gửi tiết kiệm" path="/configs/savings" />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Config;
