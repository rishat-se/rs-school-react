import React from 'react';
import GameCard, { GameCardData } from '../GameCard/GameCard';
import './GameCardList.css';

type GameCardListProps = {
  gameCardList: GameCardData[];
};

function GameCardList(props: GameCardListProps) {
  const gameCardItems = props.gameCardList.map((gameCard) => (
    <GameCard key={gameCard.id} gameCard={gameCard} />
  ));
  return (
    <ul className="game-card-list" aria-label="game-card-list">
      {gameCardItems}
    </ul>
  );
}

export default GameCardList;
