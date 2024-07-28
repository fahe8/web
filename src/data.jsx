import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const buscarUsuarioPorDNI = async (dni) => {
    try {
      const response = await fetch(`https://sheetdb.io/api/v1/dxhu9qdsm90h6/search?DNI=${dni}`);
      const data = await response.json();
      if (data.length > 0) {
        setUsuario(data[0]);
      } else {
        setUsuario(null);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <UserContext.Provider value={{ usuario, buscarUsuarioPorDNI }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
