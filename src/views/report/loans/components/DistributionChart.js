import { Avatar, Box, Stack, Typography, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';

const colorSeries = ['#5D87FF', '#ECF2FF', '#AC87C5', '#E0AED0', '#FFF8C9'];

const DistributionChart = ({ items }) => {
  const theme = useTheme();

  const labelSeries = items.map((entry) => entry.label);
  const valueSeries = items.map((entry) => entry.value);

  const optionscolumnchart = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: colorSeries,
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    labels: labelSeries,
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };

  return (
    <Box>
      <Chart options={optionscolumnchart} series={valueSeries} type="donut" height="250px" />
      <Stack spacing={3} mt={5} direction="row" justifyContent="center">
        {items.map((item, index) => (
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              sx={{
                width: 9,
                height: 9,
                backgroundColor: colorSeries[index],
                svg: { display: 'none' },
              }}
            ></Avatar>
            <Typography variant="subtitle2" color="textSecondary">
              {item.label}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default DistributionChart;
