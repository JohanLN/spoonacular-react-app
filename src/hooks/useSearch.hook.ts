import SearchContext from '@/context/searchContext';
import { useContext } from 'react';

const useSearch = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchContext');
  }

  return context;
};

export default useSearch;
