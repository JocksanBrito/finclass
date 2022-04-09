import { createContext, useState } from "react";

interface ContexProps {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext({} as ContexProps);

const AuthProvider: React.FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => setIsLogged(true);
  const logout = () => setIsLogged(false);

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
