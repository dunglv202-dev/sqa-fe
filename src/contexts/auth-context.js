import { createContext } from "react";

const initialValue = {
  user: {
    name: null,
    authorities: [],
  },
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext(initialValue);

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
