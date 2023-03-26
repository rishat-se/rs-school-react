import React, { Component } from 'react';
import './GameCard.css';

export type GameCardData = {
  id: string;
  gameName: string;
  developer: string;
  publisher: string;
  firstRelease: string;
  engine: string;
  platforms: string[];
  esrbRating: string;
  isSequelAnnounced: string;
  imageFile: string;
  [key: string]: any;
};

type GameCardProps = {
  gameCard: GameCardData;
};
//  /*Component<GameCardProps>*/

class GameCard extends Component<GameCardProps> {
  render() {
    const {
      gameName,
      developer,
      publisher,
      firstRelease,
      engine,
      platforms,
      esrbRating,
      isSequelAnnounced,
    } = this.props.gameCard;
    return (
      <li className="game-card" aria-label="game-card">
        <img alt={`${this.props.gameCard.gameName} image`} src={this.props.gameCard.imageFile} />
        <ul>
          <li aria-label="game-card-property">
            Game: <span>{gameName}</span>
          </li>
          <li aria-label="game-card-property">
            Developer: <span>{developer}</span>
          </li>
          <li aria-label="game-card-property">
            Publisher: <span>{publisher}</span>
          </li>
          <li aria-label="game-card-property">
            First Relaase: <span>{firstRelease}</span>
          </li>
          <li aria-label="game-card-property">
            Game Engine: <span>{engine}</span>
          </li>
          <li aria-label="game-card-property">
            Platforms: <span>{platforms}</span>
          </li>
          <li aria-label="game-card-property">
            ESRB Rating: <span>{esrbRating}</span>
          </li>
          <li aria-label="game-card-property">
            Is sequel announced?: <span>{isSequelAnnounced}</span>
          </li>
        </ul>
      </li>
    );
  }
}

export default GameCard;
