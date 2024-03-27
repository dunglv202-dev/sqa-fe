import React, { useContext, useState } from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { AuthContext } from 'src/contexts/auth-context';

const AuthLogin = () => {
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    await authContext.login(username, password);
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <Stack>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="username"
              mb="5px"
            >
              Tên đăng nhập
            </Typography>
            <CustomTextField
              id="username"
              variant="outlined"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Mật khẩu
            </Typography>
            <CustomTextField
              id="password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </Box>
          <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Ghi nhớ thiết bị" />
            </FormGroup>
            <Typography
              component={Link}
              to="/"
              fontWeight="500"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
              }}
            >
              Quên mật khẩu ?
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Button color="primary" variant="contained" size="large" type="submit" fullWidth>
            Đăng nhập
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AuthLogin;
