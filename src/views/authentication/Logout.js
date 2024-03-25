import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'src/contexts/auth-context';

const Logout = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.logout();
  }, []);

  return <Navigate to="/auth/login" />;
};

export default Logout;
