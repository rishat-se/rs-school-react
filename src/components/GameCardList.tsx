import React, { Component } from 'react';
import GameCard, { GameCardData } from './GameCard';
// import './GameCardList.css';

type GameCardListProps = {
  gameCardList: GameCardData[];
};

class GameCardList extends Component<GameCardListProps> {
  render() {
    const gameCardItems = this.props.gameCardList.map((gameCard) => (
      <GameCard key={gameCard.id} gameCard={gameCard} />
    ));
    return (
      <ul className="card-list" aria-label="card-list">
        {gameCardItems}
      </ul>
    );
  }
}

export default GameCardList;
