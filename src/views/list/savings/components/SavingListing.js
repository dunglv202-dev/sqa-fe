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

const SavingListing = ({ savings }) => {
  if (!savings?.length) {
    return (
      <Box sx={{ paddingBlock: 3 }}>
        <Typography variant="h6" align="center">
          Không tìm thấy sổ tiết kiệm nào!
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
                Ngày gửi
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight={600}>
                Kỳ hạn
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight={600}>
                Số tiền gửi
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2" fontWeight={600}>
                Lãi suất
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
          {savings.map((product) => (
            <TableRow key={product.name}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                  }}
                >
                  {product.id}
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
                    <Typography variant="subtitle2" fontWeight={600}>
                      {product.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: '13px',
                      }}
                    >
                      {product.post}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {product.pname}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {product.pname}
                </Typography>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{
                    px: '4px',
                    backgroundColor: product.pbg,
                    color: '#fff',
                  }}
                  size="small"
                  label={product.priority}
                ></Chip>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                  {product.pname}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">${product.budget}k</Typography>
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

export default SavingListing;
