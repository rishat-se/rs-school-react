import React, { useEffect, useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  useEffect(() => {
    console.log('search value saved');
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  return (
    <div className="search-bar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => handleChange(e)} type="search" value={searchValue}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
