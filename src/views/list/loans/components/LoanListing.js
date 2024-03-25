import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import ExternalLink from 'src/components/shared/ExternalLink';

const LoanListing = ({ loans }) => {
  if (!loans?.length) {
    return (
      <Box sx={{ paddingBlock: 3 }}>
        <Typography variant="h6" align="center">
          Không tìm thấy khoản vay nào!
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
      <Table
        sx={{
          whiteSpace: 'nowrap',
          mt: 2,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Mã
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Khách hàng
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                CCCD
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Ngày vay
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" fontWeight={600}>
                Loại hình vay
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight={600}>
                Số tiền
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
          {loans.map((loan) => (
            <TableRow key={loan.id}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                  }}
                >
                  {loan.id}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary" fontWeight={400}>
                      {loan.customer}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {loan.idCardNo}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {loan.lendingDate}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    px: '4px',
                    backgroundColor: loan.type === 'SECURED' ? 'primary.main' : 'error.main',
                    color: '#fff',
                  }}
                  size="small"
                  label={loan.type === 'SECURED' ? 'Thế chấp' : 'Tín chấp'}
                ></Chip>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">{loan.amount}</Typography>
              </TableCell>
              <TableCell align="center">
                <ExternalLink href="./helloWorld" target="_blank">
                  Xem
                </ExternalLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default LoanListing;
