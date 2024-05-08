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
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { fetchSavingConfig } from 'src/services/config';

const DetailSavingConfig = () => {
  const { id } = useParams();
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchSavingConfig(id);
      setConfigs(data);
    })();
  }, []);

  const handleSubmit = async (approved) => {
    await updateConfigReviewResult({ id, approved });
    navigate('/configs');
  };

  return (
    <PageContainer title="Cấu hình biểu lãi gửi tiết kiệm">
      <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: '40%' }}>
            <Typography variant="h3" alignSelf="center">
              Yêu cầu thay đổi biểu lãi gửi tiết kiệm - ID: #{id}
            </Typography>
            <Typography variant="h4" alignSelf="center">
              Quản lý thao tác: {detailConfig?.userRequested?.displayName}
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
                        {cfg.termInMonth || 'Không kỳ hạn'}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <CustomTextField
                        type="number"
                        name={`${cfg.termInMonth}`}
                        value={cfg.yearlyInterestRate * 100 || ''}
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
                variant="contained"
                sx={{ paddingInline: 4, paddingBlock: 1.5 }}
                onClick={() => handleSubmit(true)}
              >
                Phê duyệt
              </Button>
              <Button
                variant="contained"
                sx={{
                  paddingInline: 4,
                  paddingBlock: 1.5,
                  backgroundColor: '#ff5d72',
                  ':hover': { backgroundColor: '#ff5067' },
                }}
                onClick={() => handleSubmit(false)}
              >
                Từ chối
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </PageContainer>
  );
};

export default DetailSavingConfig;
