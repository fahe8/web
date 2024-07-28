import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const buscarUsuarioPorDNI = async (codigo) => {
    try {
      const response = await fetch(`https://sheetdb.io/api/v1/dxhu9qdsm90h6/search?codigo=${codigo}`);
      const data = await response.json();
      if (data.length > 0) {
        const grupo = data[0].grupo;
        const grupoResponse = await fetch(`https://sheetdb.io/api/v1/dxhu9qdsm90h6/search?grupo=${grupo}`);
        const grupoData = await grupoResponse.json();
        setUsuario(grupoData);
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
