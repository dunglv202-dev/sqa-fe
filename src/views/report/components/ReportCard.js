import { Box, Typography } from '@mui/material';
import Figure from './Figure';

const ReportCard = ({ figure, desc, align = 'left' }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={align === 'left' ? 'flex-start' : 'flex-end'}
    >
      <Figure value={figure || '-'} />
      <Typography variant="subtitle2">{desc}</Typography>
    </Box>
  );
};

export default ReportCard;
