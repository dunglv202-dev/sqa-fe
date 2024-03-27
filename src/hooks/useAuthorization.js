import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/contexts/auth-context';

const useAuthorization = (authorities) => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (
      !authContext.user ||
      !authorities.find((authority) => authContext.user.authorities.includes(authority))
    ) {
      navigate('/auth/404');
    }
  }, []);
};

export default useAuthorization;
