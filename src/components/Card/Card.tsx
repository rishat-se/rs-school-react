import React from 'react';
import './Card.css';
import { CardData } from '../../types/CardData';

type CardProps = {
  card: CardData;
  handleCardClick: (url: string) => void;
};

function Card({ card, handleCardClick }: CardProps) {
  return (
    <li onClick={() => handleCardClick(card.url)} className="card" aria-label="card">
      <img alt={`${card.name} image`} src={card.image} />
      <ul>
        <li aria-label="character-property">
          name: <span>{card.name}</span>
        </li>
        <li aria-label="character-property">
          origin: <span>{card.origin.name}</span>
        </li>
      </ul>
    </li>
  );
}

export default Card;
