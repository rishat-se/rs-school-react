import React, { Component } from 'react';
import cards from '../data/cards';
import Card from './Card';
import './CardList.css';

class CardList extends Component {
  render() {
    const cardItems = cards.map((item) => <Card card={item} />);
    return <div className="card-list">{cardItems}</div>;
  }
}

export default CardList;
