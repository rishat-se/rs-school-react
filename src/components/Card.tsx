import React, { Component } from 'react';
import { CardData } from '../data/cards';

type CardProps = {
  card: CardData;
};

class Card extends Component<CardProps> {
  render() {
    return (
      <div key={this.props.card.id}>
        <img alt={`${this.props.card.name} image`} src={this.props.card.image} />
        <ul>
          <li>name: {this.props.card.name}</li>
          <li>status: {this.props.card.status}</li>
          <li>gender: {this.props.card.gender}</li>
          <li>species: {this.props.card.species}</li>
          <li>origin: {this.props.card.origin.name}</li>
          <li>location: {this.props.card.location.name}</li>
        </ul>
      </div>
    );
  }
}

export default Card;
