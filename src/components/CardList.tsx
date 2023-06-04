import React, { Component } from 'react';
import cards from '../data/cards';
import Card from './Card';
import './CardList.css';

class CardList extends Component {
  render() {
    const cardItems = cards.map((item) => <Card key={item.id} card={item} />);
    return (
      <ul className="card-list" aria-label="card-list">
        {cardItems}
      </ul>
    );
  }
}

export default CardList;
