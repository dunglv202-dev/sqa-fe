import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchApi } from 'src/services/general';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = async (username, password) => {
    console.log(username, password);

    const respData = await fetchApi({
      endpoint: '/api/v1/auth/login',
      method: 'POST',
      payload: { username, password },
    });

    const user = {
      name: respData.displayName,
      authorities: respData.authorities,
    };

    localStorage.setItem('accessToken', respData.accessToken);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    navigate('/');
  };

  const logout = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');

    navigate('/auth/login');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
