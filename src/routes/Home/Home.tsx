import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CardList />
      </div>
    );
  }
}

export default Home;
