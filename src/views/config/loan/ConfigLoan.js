import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { configLoan, fetchLoanConfigs } from 'src/services/config';

const ConfigLoan = ({ type }) => {
  const tomorrow = dayjs().add(1, 'day');
  const [startDate, setStartDate] = useState(tomorrow);
  const [configs, setConfigs] = useState([]);
  const title = 'Cấu hình biểu lãi vay ' + (type === 'UNSECURED' ? 'tín chấp' : 'thế chấp');

  useEffect(() => {
    const fetchConfigs = async () => {
      setConfigs(await fetchLoanConfigs(type));
    };

    fetchConfigs();
  }, []);

  const handleRateChange = (e) => {
    const purposeId = Number(e.target.name);
    const newInterest = Number(e.target.value) / 100;

    configs.find((entry) => entry.purpose.id === purposeId).yearlyInterestRate = newInterest;
    setConfigs([...configs]);
  };

  const handleLimitChange = (e) => {
    const purposeId = Number(e.target.name);
    const newInterest = Number(e.target.value);

    configs.find((entry) => entry.purpose.id === purposeId).limit = newInterest;
    setConfigs([...configs]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const standardizedConfigs = [];

      configs.forEach((cfg) =>
        standardizedConfigs.push({
          purposeId: cfg.purpose.id,
          yearlyInterestRate: cfg.yearlyInterestRate,
          limit: cfg.limit,
        }),
      );

      const payload = {
        type,
        startDate: startDate.format('YYYY-MM-DD'),
        configs: standardizedConfigs,
      };

      await configLoan(payload);
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };

  return (
    <PageContainer title={title}>
      <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: '40%' }}>
            <Typography variant="h3" alignSelf="center">
              {title}
            </Typography>
            <Table
              sx={{
                whiteSpace: 'nowrap',
                width: 'auto',
                minWidth: '300px',
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2" align="left" fontWeight={600}>
                      Mục đích vay
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2" fontWeight={600}>
                      Lãi suất (%/năm)
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2" fontWeight={600}>
                      Hạn mức (VNĐ)
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {configs.map((cfg) => (
                  <TableRow key={cfg.purpose.id}>
                    <TableCell align="justify">
                      <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                        {cfg.purpose.label}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <CustomTextField
                        type="number"
                        name={`${cfg.purpose.id}`}
                        value={cfg.yearlyInterestRate * 100}
                        onChange={handleRateChange}
                        inputProps={{ step: 'any' }}
                        sx={{ fontWeight: 400, width: '150px' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <CustomTextField
                        type="number"
                        name={`${cfg.purpose.id}`}
                        value={cfg.limit}
                        onChange={handleLimitChange}
                        sx={{ fontWeight: 400 }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Box
              sx={{
                alignSelf: 'stretch',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                gap: 3,
              }}
            >
              <Box>
                <Typography sx={{ marginBottom: 1 }}>Áp dụng từ</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disablePast
                    minDate={tomorrow}
                    value={startDate}
                    onChange={(v) => setStartDate(v)}
                    views={['day', 'month', 'year']}
                    renderInput={(params) => <CustomTextField sx={{ width: '100%' }} {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Button
                type="submit"
                variant="contained"
                sx={{ paddingInline: 4, paddingBlock: 1.5 }}
              >
                Gửi yêu cầu
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </PageContainer>
  );
};

export default ConfigLoan;
