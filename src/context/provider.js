import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [stockData, setStockData] = useState([]);
  const [exchange, setExchange] = useState()
  return (
    <AppContext.Provider
      value={{
        stockData,
        setStockData,
        exchange,
        setExchange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useProvider = () => useContext(AppContext);

export default AppProvider;
