import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUnresolvedConfig } from 'src/services/config';

const getConfigTypeLabel = (type) => {
  switch (type) {
    case 'SECURED_LOAN':
      return 'Vay thế chấp';
    case 'UNSECURED_LOAN':
      return 'Vay tín chấp';
    default:
      return 'Gửi tiết kiệm';
  }
};

const ReviewConfig = () => {
  const [pendingConfigs, setPendingConfigs] = useState([]);

  useEffect(() => {
    const fetchConfigs = async () => {
      const page = await fetchUnresolvedConfig();

      setPendingConfigs(page.items);
    };

    fetchConfigs();
  }, []);

  return (
    <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
      <Typography variant="h2">Yêu cầu thay đổi cấu hình</Typography>
      <Table
        sx={{
          whiteSpace: 'nowrap',
          mt: 2,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={500}>
                Mã
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Người tạo
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Ngày tạo
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Loại cấu hình
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Ngày áp dụng
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2" fontWeight={600}>
                Hành động
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendingConfigs.map((cfg) => (
            <TableRow key={cfg.id}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                  }}
                >
                  {cfg.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" color="textSecondary" fontWeight={600}>
                  {cfg.userRequested.displayName}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {new Date(cfg.createdAt).toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {getConfigTypeLabel(cfg.configType)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {cfg.startDate}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Link href={`/configs/${cfg.id}`}>
                  <Typography typography="subtitle2">Chi tiết</Typography>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ReviewConfig;
