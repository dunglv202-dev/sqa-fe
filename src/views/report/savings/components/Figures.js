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
          figure={reportData.interestAmountToPay}
          desc={'tiền lãi phải trả cho khách hàng đang mở sổ'}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard figure={reportData.numberOfWithdraw} desc={'sổ tiết kiệm được rút'} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ReportCard
          figure={reportData.dueAccountNotWithdraw}
          desc={'sổ tiết kiệm đã đến hạn chưa rút'}
        />
      </Grid>
    </Grid>
  );
};

export default Figures;
