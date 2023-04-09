import React from 'react';
import './FullCard.css';
import { CardData } from '../../types/CardData';

type CardProps = {
  card: CardData;
};

function FullCard({ card }: CardProps) {
  return (
    <article className="fullcard" aria-label="fullcard">
      <img alt={`${card.name} image`} src={card.image} />
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
          type: <span>{card.type}</span>
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
        <li aria-label="character-property">
          episode:
          <ul className="episode__list">
            {card.episode.map((item) => {
              const urlParts = item.split('/');
              const episodeNumber = urlParts[urlParts.length - 1];
              return (
                <li key={episodeNumber}>
                  <span>{episodeNumber}</span>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </article>
  );
}

export default FullCard;
