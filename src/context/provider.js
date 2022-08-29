import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [stockData, setStockData] = useState([]);
  const [exchange, setExchange] = useState();
  const [keyWord, setKeyWord] = useState("");
  const [value, setValue] = useState(null);
  return (
    <AppContext.Provider
      value={{
        keyWord,
        setKeyWord,
        value,
        setValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useProvider = () => useContext(AppContext);

export default AppProvider;
