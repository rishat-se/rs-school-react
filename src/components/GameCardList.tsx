import React, { Component } from 'react';
// import './GameCardList.css';

class GameCardList extends Component<{this.props.gameCard}> {
  render() {
    const GameCardItems = cards.map((item) => <Card key={item.id} card={item} />);
    return (
      <ul className="card-list" aria-label="card-list">
        {cardItems}
      </ul>
    );
  }
}

export default CardList;
