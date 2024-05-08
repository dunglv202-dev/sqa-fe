import { Grid } from '@mui/material';
import ReportCard from '../../components/ReportCard';

const Figures = ({ reportData }) => {
  return (
    <Grid container spacing={7}>
      <Grid item xs={12} lg={6}>
        <ReportCard figure={reportData.numberOfLoan} desc={'khoản vay'} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard figure={reportData.numberOfNewCustomer} desc={'khách hàng vay mới'} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard
          figure={new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
            reportData.interestAmount,
          )}
          desc={'tổng tiền thu lãi'}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard
          figure={new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
            reportData.amountForLending,
          )}
          desc={'tổng tiền cho vay'}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard figure={reportData.uncollectedDueLoan} desc={'khoản vay đến hạn chưa trả'} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard
          figure={new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
            reportData.uncollectedAmount,
          )}
          desc={'tổng tiền chưa thu hồi được'}
        />
      </Grid>
    </Grid>
  );
};

export default Figures;
