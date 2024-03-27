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
import useAuthorization from 'src/hooks/useAuthorization';
import { configSaving, fetchSavingConfigs } from 'src/services/config';

const ConfigSaving = () => {
  useAuthorization(['ROLE_MANAGER', 'ROLE_DIRECTOR']);

  const tomorrow = dayjs().add(1, 'day');
  const [startDate, setStartDate] = useState(tomorrow);
  const [submitting, setSubmitting] = useState(false);
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    const fetchConfigs = async () => {
      setConfigs(await fetchSavingConfigs());
    };

    fetchConfigs();
  }, []);

  const handleRateChange = (e) => {
    const termInMonth = Number(e.target.name);
    const newInterest = Number(e.target.value) / 100;

    configs.find((entry) => entry.termInMonth === termInMonth).yearlyInterestRate = newInterest;
    setConfigs([...configs]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      startDate: startDate.format('YYYY-MM-DD'),
      configs,
    };

    try {
      setSubmitting(true);
      await configSaving(payload);
      alert('Cấu hình biểu lãi gửi tiết kiệm đã được gửi đi');
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageContainer title="Cấu hình biểu lãi gửi tiết kiệm">
      <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: '40%' }}>
            <Typography variant="h3" alignSelf="center">
              Tạo cấu hình biểu lãi gửi tiết kiệm
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
                    <Typography variant="subtitle2" align="center" fontWeight={600}>
                      Kỳ hạn (tháng)
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2" fontWeight={600}>
                      Lãi suất (%/năm)
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {configs.map((cfg) => (
                  <TableRow key={cfg.termInMonth}>
                    <TableCell align="center">
                      <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                        {cfg.termInMonth}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <CustomTextField
                        type="number"
                        name={`${cfg.termInMonth}`}
                        value={cfg.yearlyInterestRate * 100}
                        onChange={handleRateChange}
                        inputProps={{ step: 'any' }}
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
                disabled={submitting}
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

export default ConfigSaving;
