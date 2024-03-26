import { Box, Divider, Typography, useTheme } from '@mui/material';

const DetailSection = ({ title, children }) => {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: '40px' }}>
      <Divider textAlign="left" sx={{ marginBottom: '30px', textTransform: 'uppercase' }}>
        <Typography sx={{ fontWeight: 500, fontSize: '1.1rem', color: theme.palette.primary.main }}>
          {title}
        </Typography>
      </Divider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DetailSection;
