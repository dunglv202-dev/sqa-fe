import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

    console.log(user.authorities);
    if (user.authorities.includes('ROLE_MANAGER')) {
      window.location.href = '/manage/loans';
    }
  };

  const logout = async () => {};

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
