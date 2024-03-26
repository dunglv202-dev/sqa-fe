import { Box, Typography } from '@mui/material';

const ReportCard = ({ icon, children }) => {
  const Icon = icon;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Icon />
      <Box>{children}</Box>
    </Box>
  );
};

export default ReportCard;
