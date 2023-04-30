import React from 'react';
import { CardData } from '../../types/CardData';

type CardProps = {
  card: CardData;
  handleCardClick: (id: string) => void;
};

function Card({ card, handleCardClick }: CardProps) {
  return (
    <li onClick={() => handleCardClick(card.id)} className="card" aria-label="card">
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
