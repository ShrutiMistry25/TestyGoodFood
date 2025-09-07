import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize isLoggedIn based on localStorage
    return !!localStorage.getItem('userLoginData');
  });

  const login = () => {
    // Logic for login
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Logic for logout
    localStorage.removeItem('userLoginData');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
