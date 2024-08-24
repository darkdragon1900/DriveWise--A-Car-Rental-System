import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectPath, setRedirectPath] = useState('/'); // Default path
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is a redirect path stored in localStorage
    const storedRedirectPath = localStorage.getItem('redirectPath');
    if (storedRedirectPath) {
      setRedirectPath(storedRedirectPath);
      localStorage.removeItem('redirectPath');
    }
  }, []);

  const login = (redirectTo = '/') => {
    // Perform login logic here (e.g., call API)
    setIsAuthenticated(true);
    navigate(redirectTo); // Redirect to the intended path after login
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login'); // Redirect to login page or home page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
