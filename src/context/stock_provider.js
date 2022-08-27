import React, { createContext, useContext, useState } from "react";

const StockContext = createContext();

const StockProvider = ({ children }) => {
  const [stockData, setStockData] = useState([]);
  const [exchange, setExchange] = useState(null);
  return (
    <StockContext.Provider
      value={{
        stockData,
        setStockData,
        exchange,
        setExchange,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};

export const useStockProvider = () => useContext(StockContext);

export default StockProvider;
