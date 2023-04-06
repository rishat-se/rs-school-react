import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './SearchBar.css';
import { API_URL } from '../../constants/constants';

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

  console.log('SearchBar render');
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
