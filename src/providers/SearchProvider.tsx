import SearchContext from '@/context/searchContext';
import { ReactNode, useState } from 'react';

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>('');
  const [offset, setOffset] = useState<number>(1);

  return (
    <SearchContext.Provider value={{ query, setQuery, offset, setOffset }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
