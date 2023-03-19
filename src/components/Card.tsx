import React, { Component } from 'react';
import { CardData } from '../data/cards';
import './Card.css';

type CardProps = {
  card: CardData;
};

class Card extends Component<CardProps> {
  render() {
    return (
      <li className="card" aria-label="card">
        <img alt={`${this.props.card.name} image`} src={this.props.card.image} />
        <ul>
          <li aria-label="character-property">
            name: <span>{this.props.card.name}</span>
          </li>
          <li aria-label="character-property">
            status: <span>{this.props.card.status}</span>
          </li>
          <li aria-label="character-property">
            gender: <span>{this.props.card.gender}</span>
          </li>
          <li aria-label="character-property">
            species: <span>{this.props.card.species}</span>
          </li>
          <li aria-label="character-property">
            origin: <span>{this.props.card.origin.name}</span>
          </li>
          <li aria-label="character-property">
            location: <span>{this.props.card.location.name}</span>
          </li>
        </ul>
      </li>
    );
  }
}

export default Card;
