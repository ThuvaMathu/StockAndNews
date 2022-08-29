import React, { createContext, useContext, useState } from "react";

const StockContext = createContext();

const StockProvider = ({ children }) => {
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  const [exchange, setExchange] = useState(null);
  return (
    <StockContext.Provider
      value={{
        stockSymbol,
        setStockSymbol,
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
