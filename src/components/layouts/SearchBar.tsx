import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleSearchSubmit: (query: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { handleSearchSubmit, className, ...restProps } = props;
  const [query, setQuery] = useState<string>('');

  return (
    <div
      className={cn(
        className,
        'flex w-full items-center gap-1 rounded-lg border pl-4 pr-2',
      )}
    >
      <Search size={15} className="text-primary" />
      <Input
        placeholder="Search a recipe"
        className="border-none focus-visible:ring-0"
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={(event) =>
          event.key === 'Enter' && handleSearchSubmit(query)
        }
        {...restProps}
      />
      <Separator orientation="vertical" />
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-transparent hover:text-primary"
        onClick={() => handleSearchSubmit(query)}
      >
        <Search />
      </Button>
    </div>
  );
};

export default SearchBar;
