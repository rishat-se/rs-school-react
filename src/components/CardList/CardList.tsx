import React from 'react';
import Card from '../Card/Card';
import './CardList.css';
import { CardData } from '../../types/CardData';

type CardListProps = {
  cards: CardData[];
};

function CardList({ cards }: CardListProps) {
  return (
    <ul className="card-list" aria-label="card-list">
      {cards.map((item) => (
        <Card key={item.id} card={item} />
      ))}
    </ul>
  );
}

export default CardList;
