// IdentityContext.js

import React, { createContext, useContext, useState } from 'react';

const IdentityContext = createContext();

export const IdentityProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <IdentityContext.Provider value={{ user, setUser }}>
      {children}
    </IdentityContext.Provider>
  );
};

export const useIdentity = () => {
  const context = useContext(IdentityContext);
  if (!context) {
    throw new Error('useIdentity must be used within an IdentityProvider');
  }
  return context;
};
