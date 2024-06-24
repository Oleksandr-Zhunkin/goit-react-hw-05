import { createContext, useState } from "react";

export const SearchContext = createContext();

const ContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const contextValue = {
    searchValue,
    setSearchValue,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
export default ContextProvider;
