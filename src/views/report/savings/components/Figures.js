import { Grid } from '@mui/material';
import ReportCard from '../../components/ReportCard';

const Figures = ({ reportData }) => {
  return (
    <Grid container spacing={7}>
      <Grid item xs={12} lg={6}>
        <ReportCard figure={reportData.numberOfSavingAccount} desc={'số tiết kiệm mới'} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard figure={reportData.depositAmount} desc={'tổng tiền đã gửi'} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard
          figure={reportData.amountPayForDueAccount}
          desc={'tổng tiền trả cho sổ đáo hạn'}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard
          figure={reportData.interestPayForDueAccount}
          desc={'lợi nhuận trả cho sổ đáo hạn'}
        />
      </Grid>
    </Grid>
  );
};

export default Figures;
