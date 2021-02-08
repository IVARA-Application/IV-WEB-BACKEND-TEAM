import React, { createContext, useState,useEffect } from 'react';
export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [auth, setAuth] = useState(false);
  
    const contextValue = {
      user,
      setUser,
      auth,
      setAuth,
    };

    return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    );
  }; 