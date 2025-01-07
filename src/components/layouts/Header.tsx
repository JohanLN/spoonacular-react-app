import SearchBar from '@/components/layouts/SearchBar';
import useSearch from '@/hooks/useSearch.hook';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
  const { setQuery, setOffset } = useSearch();

  const handleSearchSubmit = (query: string) => {
    setQuery(query);
    setOffset(1);
  };

  return (
    <div className="sticky top-0 flex w-full justify-between bg-white px-4 py-2 md:gap-5">
      <h3 className="text-primary">Spoonacular</h3>
      <SearchBar
        className="invisible md:visible"
        handleSearchSubmit={handleSearchSubmit}
      />
      <Button className="visible md:invisible" variant="ghost" size="icon">
        <Search />
      </Button>
    </div>
  );
};

export default Header;
