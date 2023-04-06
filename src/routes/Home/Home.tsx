import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { API_URL } from '../../constants/constants';
import { CardData } from '../../types/CardData';

function Home() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    console.log('useEffect searchValue is ', searchValue);
    fetch(`${API_URL}/?name=${searchValue}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(({ info, results }) => setCards(results));
  }, [searchValue]);

  function handleSearchValueSubmit(searchValue: string) {
    console.log('handleSubmit called');
    setSearchValue(searchValue);
    localStorage.setItem('searchValue', searchValue);
  }

  console.log('home render & searchValue is: ', searchValue);
  return (
    <div>
      <SearchBar searchValue={searchValue} onSearchValueSubmit={handleSearchValueSubmit} />
      <CardList cards={cards} />
    </div>
  );
}

export default Home;
