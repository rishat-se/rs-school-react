import React, { Component } from 'react';
import cards from '../../data/cards';
import Card from '../Card/Card';
import './CardList.css';

function CardList() {
  const cardItems = cards.map((item) => <Card key={item.id} card={item} />);
  return (
    <ul className="card-list" aria-label="card-list">
      {cardItems}
    </ul>
  );
}

export default CardList;
