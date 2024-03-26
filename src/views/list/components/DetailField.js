import { Box, Typography } from '@mui/material';

const DetailField = ({ label, value }) => {
  return (
    <Box display="flex">
      <Typography width="200px"> {label}: </Typography>
      <Typography sx={{ fontWeight: 600 }}>{value}</Typography>
    </Box>
  );
};

export default DetailField;
