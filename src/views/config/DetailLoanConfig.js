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
import { useNavigate, useParams } from 'react-router';
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { fetchLoanConfig, updateConfigReviewResult } from 'src/services/config';

const DetailLoanConfig = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailConfig, setDetailConfig] = useState({});

  useEffect(() => {
    (async () => {
      const data = await fetchLoanConfig(id);
      setDetailConfig(data);
    })();
  }, []);

  const handleSubmit = async (approved) => {
    const ok = window.confirm(
      `Xác nhận ${approved ? 'phê duyệt' : 'từ chối'} yêu cầu thay đổi biểu lãi này?`,
    );
    if (ok) {
      await updateConfigReviewResult({ id, approved });
      navigate('/configs');
    }
  };

  return (
    <PageContainer title={'Chi tiết yêu cầu thay đổi biểu lãi'}>
      <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: '40%' }}>
          <Typography variant="h3" alignSelf="center">
            Yêu cầu thay đổi biểu lãi{' '}
            {detailConfig.type && detailConfig.type === 'SECURED_LOAN'
              ? 'vay thế chấp'
              : 'vay tín chấp'}{' '}
            - ID: #{id}
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
              {detailConfig.configs?.map((cfg) => (
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
                      value={cfg.yearlyInterestRate * 100 || ''}
                      disabled
                      inputProps={{ step: 'any' }}
                      sx={{ fontWeight: 400, width: '150px' }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <CustomTextField
                      type="number"
                      name={`${cfg.purpose.id}`}
                      value={cfg.limit}
                      disabled
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
                  value={new Date()}
                  onChange={() => {}}
                  disabled
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
      </Container>
    </PageContainer>
  );
};

export default DetailLoanConfig;
