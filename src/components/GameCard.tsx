import React, { Component } from 'react';
// import './GameCard.css';

export type GameCardData = {
  id: string;
  gameName: string;
  developer: string;
  publisher: string;
  firstRelease: Date;
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
    return (
      <li className="game-card" aria-label="game-card">
        <img alt={`${this.props.gameCard.gameName} image`} src={this.props.gameCard.imageFile} />
        <ul>
          <li aria-label="game-card-property">
            Game: <span>{this.props.gameCard.gameName}</span>
          </li>
          <li aria-label="game-card-property">
            Developer: <span>{this.props.gameCard.developer}</span>
          </li>
          <li aria-label="game-card-property">
            Publisher: <span>{this.props.gameCard.publisher}</span>
          </li>
          <li aria-label="game-card-property">
            First Relaase: <span>{this.props.gameCard.firstRelease.getDate()}</span>
          </li>
          <li aria-label="game-card-property">
            Game Engine: <span>{this.props.gameCard.engine}</span>
          </li>
          <li aria-label="game-card-property">
            Platforms: <span>{this.props.gameCard.platforms}</span>
          </li>
          <li aria-label="game-card-property">
            ESRB Rating: <span>{this.props.gameCard.esrbRating}</span>
          </li>
        </ul>
      </li>
    );
  }
}

export default GameCard;
