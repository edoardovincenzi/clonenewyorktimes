import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);

const MyGlobalContext: React.FC<React.ReactNode> = ({ children }) => {
  const [home, setHome] = useState();
  const [errorHome, setErrorHome] = useState("");
  return (
    <ThemeContext.Provider value={{ home, setHome, errorHome, setErrorHome }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useGlobalContext = () => useContext(ThemeContext);

export default MyGlobalContext;
