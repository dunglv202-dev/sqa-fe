import { Grid } from '@mui/material';
import ReportCard from '../../components/ReportCard';

const Figures = ({ reportData }) => {
  return (
    <Grid container spacing={7}>
      <Grid item lg={6}>
        <ReportCard figure={reportData.numberOfLoan} desc={'khoản vay'} />
      </Grid>
      <Grid item lg={6}>
        <ReportCard figure={reportData.numberOfNewCustomer} desc={'khách hàng vay mới'} />
      </Grid>
      <Grid item lg={6}>
        <ReportCard figure={reportData.interestAmount} desc={'tổng tiền thu lãi'} />
      </Grid>
      <Grid item lg={6}>
        <ReportCard figure={reportData.amountForLending} desc={'tổng tiền cho vay'} />
      </Grid>
      <Grid item lg={6}>
        <ReportCard figure={reportData.uncollectedDueLoan} desc={'khoản vay đến hạn chưa trả'} />
      </Grid>
      <Grid item lg={6}>
        <ReportCard figure={reportData.uncollectedAmount} desc={'tổng tiền chưa thu hồi được'} />
      </Grid>
    </Grid>
  );
};

export default Figures;
