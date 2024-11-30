import { createContext } from "react";

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  offset: number,
  setOffset: (offset: number) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export default SearchContext;