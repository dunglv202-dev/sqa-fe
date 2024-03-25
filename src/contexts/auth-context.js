import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const login = async (username, password) => {
    console.log(username, password);

    const resp = await fetch('http://localhost:8080/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const respData = await resp.json();

    if (!resp.ok) {
      throw new Error(respData.error);
    }

    const user = {
      name: respData.displayName,
      authorities: respData.authorities,
    };

    localStorage.setItem('accessToken', respData.accessToken);
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const logout = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');

    navigate('/auth/login');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
