import React from 'react';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home() {
  return (
    <div>
      <SearchBar />
      <CardList />
    </div>
  );
}

export default Home;
