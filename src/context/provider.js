import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState("");
  const [value, setValue] = useState("");
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
