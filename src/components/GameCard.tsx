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
};

type GameCardProps = {
  gameCard: GameCardData;
};

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
        <ul className="game-card__properties">
          <li className="game-card__property" aria-label="game-card-property">
            Game: <span>{gameName}</span>
          </li>
          <li className="game-card__property" aria-label="game-card-property">
            Developer: <span>{developer}</span>
          </li>
          <li className="game-card__property" aria-label="game-card-property">
            Publisher: <span>{publisher}</span>
          </li>
          <li className="game-card__property" aria-label="game-card-property">
            First Relaase: <span>{firstRelease}</span>
          </li>
          <li className="game-card__property" aria-label="game-card-property">
            Game Engine: <span>{engine}</span>
          </li>
          <li className="game-card__property game-card__platforms" aria-label="game-card-property">
            <p>Platforms:</p>
            <ul>
              {platforms.map((platfrom) => (
                <li className="game-card__platform" key={platfrom}>
                  <span>{platfrom}</span>
                </li>
              ))}
            </ul>
          </li>
          <li className="game-card__property" aria-label="game-card-property">
            ESRB Rating: <span>{esrbRating}</span>
          </li>
          <li className="game-card__property" aria-label="game-card-property">
            Is sequel announced?: <span>{isSequelAnnounced}</span>
          </li>
        </ul>
      </li>
    );
  }
}

export default GameCard;
