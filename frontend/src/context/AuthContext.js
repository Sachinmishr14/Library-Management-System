import React, { createContext, useState } from 'react';

export const AuthContext = createContext();  // Create context

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Login state

  const login = () => setIsLoggedIn(true);  // Login function
  const logout = () => setIsLoggedIn(false);  // Logout

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}  
    </AuthContext.Provider>
  );
};