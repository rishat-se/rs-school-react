import React, { useState } from 'react';
import './SearchBar.css';

type SearchBarProps = {
  searchValue: string;
  onSearchValueSubmit: (searchValue: string) => void;
};

function SearchBar({ searchValue, onSearchValueSubmit }: SearchBarProps) {
  const [searchInput, setSearchInput] = useState(searchValue);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchInput(e.currentTarget.value);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearchValueSubmit(searchInput);
  }

  return (
    <div className="search-bar">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input onChange={(e) => handleChange(e)} type="search" value={searchInput}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
