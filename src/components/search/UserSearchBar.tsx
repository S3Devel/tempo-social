
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

type UserSearchBarProps = {
  onSearch: (query: string) => void;
};

const UserSearchBar = ({ onSearch }: UserSearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="relative w-full mb-4">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
        <Search size={18} />
      </div>
      <Input
        type="text"
        placeholder="Buscar corredores..."
        value={query}
        onChange={handleChange}
        className="pl-10 pr-10 py-3 w-full bg-white dark:bg-slate-900/80 shadow-sm rounded-xl"
      />
      {query && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default UserSearchBar;
