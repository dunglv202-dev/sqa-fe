import { Typography, useTheme } from '@mui/material';

const Figure = ({ value }) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: 35,
        marginBottom: 1,
        color: theme.palette.primary.main,
      }}
    >
      {value}
    </Typography>
  );
};

export default Figure;
