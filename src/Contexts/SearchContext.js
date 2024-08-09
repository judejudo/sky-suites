import React, { useState } from "react";

export const SearchContext = React.createContext();

function SearchProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <SearchContext.Provider value={{
      searchResults,
      setSearchResults,
      input,
      setInput,
      hasSearched,
      setHasSearched
    }}>
      {children}
    </SearchContext.Provider>
  );
}
export default SearchProvider;
