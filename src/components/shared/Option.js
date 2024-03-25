import { Card, CardContent, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const OptionCard = styled(Card)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  },
}));

const Option = ({ title, icon, path }) => {
  const Icon = icon;

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <OptionCard sx={{ padding: 0, cursor: 'pointer' }} elevation={9}>
        <CardContent>
          <Grid container flexDirection="column" alignItems="center" spacing={2} paddingTop={2}>
            <Grid item>
              <Icon size="2rem" />
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                {title.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </OptionCard>
    </Link>
  );
};

export default Option;
