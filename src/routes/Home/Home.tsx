import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { API_URL } from '../../constants/constants';
import { CardData } from '../../types/CardData';

function Home() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [cards, setCards] = useState<CardData[]>([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/?name=${searchValue}`)
      .then((response) => {
        if (!response.ok) throw new Error('no cards matching search value');
        return response.json();
      })
      .then(({ results }) => {
        setIsPending(false);
        setCards(results);
      })
      .catch((err) => {
        setIsPending(false);
        setCards([]);
        console.log(err.message);
      });
  }, [searchValue]);

  function handleSearchValueSubmit(newSearchValue: string) {
    setSearchValue(newSearchValue);
    setIsPending(true);
    localStorage.setItem('searchValue', newSearchValue);
  }

  return (
    <div>
      <SearchBar searchValue={searchValue} onSearchValueSubmit={handleSearchValueSubmit} />
      {isPending && <span>Loading...</span>}
      {cards && <CardList cards={cards} />}
    </div>
  );
}

export default Home;
