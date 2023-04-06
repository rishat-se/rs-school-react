import React from 'react';
import './Card.css';
import { CardData } from '../../types/CardData';

type CardProps = {
  card: CardData;
};

function Card(props: CardProps) {
  const { card } = props;
  return (
    <li className="card" aria-label="card">
      <img
        alt={`${card.name} image`}
        // src={card.image ? card.image : 'public/image-placeholder.jpg'}
        src={card.image}
      />
      <ul>
        <li aria-label="character-property">
          name: <span>{card.name}</span>
        </li>
        <li aria-label="character-property">
          status: <span>{card.status}</span>
        </li>
        <li aria-label="character-property">
          species: <span>{card.species}</span>
        </li>
        <li aria-label="character-property">
          gender: <span>{card.gender}</span>
        </li>
        <li aria-label="character-property">
          origin: <span>{card.origin.name}</span>
        </li>
        <li aria-label="character-property">
          location: <span>{card.location.name}</span>
        </li>
      </ul>
    </li>
  );
}

export default Card;
