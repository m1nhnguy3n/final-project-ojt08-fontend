import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleNavigate = (navigate, path) => {
    if (authenticated) {
      navigate(path);
    } else {
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider value={{ authenticated, handleNavigate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext);
  };

  export default AuthProvider;
