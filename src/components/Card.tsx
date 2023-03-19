import React, { Component } from 'react';
import { CardData } from '../data/cards';
import './Card.css';

type CardProps = {
  card: CardData;
};

class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card">
        <img alt={`${this.props.card.name} image`} src={this.props.card.image} />
        <ul>
          <li>
            name: <span>{this.props.card.name}</span>
          </li>
          <li>
            status: <span>{this.props.card.status}</span>
          </li>
          <li>
            gender: <span>{this.props.card.gender}</span>
          </li>
          <li>
            species: <span>{this.props.card.species}</span>
          </li>
          <li>
            origin: <span>{this.props.card.origin.name}</span>
          </li>
          <li>
            location: <span>{this.props.card.location.name}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Card;
