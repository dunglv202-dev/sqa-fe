import { Box, Grid } from '@mui/material';
import { IconCalendar } from '@tabler/icons';
import Option from 'src/components/shared/Option';

const PeriodTypeSelect = ({ onSelect }) => {
  return (
    <Box>
      <Grid container justifyContent="center" paddingTop={15} spacing={3}>
        <Grid item xs={12} lg={4}>
          <Option icon={IconCalendar} title="Theo tháng" onClick={() => onSelect('month')} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Option icon={IconCalendar} title="Theo quý" onClick={() => onSelect('quarter')} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Option icon={IconCalendar} title="Theo năm" onClick={() => onSelect('year')} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PeriodTypeSelect;
