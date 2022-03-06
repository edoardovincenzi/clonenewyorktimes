import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);

const MyGlobalContext: React.FC<React.ReactNode> = ({ children }) => {
  const [home, setHome] = useState();
  const [errorHome, setErrorHome] = useState("");
  const [dataList, setDataList] = useState([]);
  const [errorList, setErrorList] = useState("");

  return (
    <ThemeContext.Provider
      value={{
        home,
        setHome,
        errorHome,
        setErrorHome,
        dataList,
        setDataList,
        errorList,
        setErrorList,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useGlobalContext = () => useContext(ThemeContext);

export default MyGlobalContext;
