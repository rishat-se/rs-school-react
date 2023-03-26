import React, { Component } from 'react';

class EsrbRatingList extends Component {
  readonly esrbRatingList = [
    'Everyone',
    'Everyone 10+',
    'Teen',
    'Mature 17+',
    'Adults Only 18+',
    'Rating Pending',
  ];

  render() {
    const esrbRatingList = this.esrbRatingList.map((item) => {
      return (
        <div key={item}>
          <label>
            <input type="radio" name="esrbRating" value={item}></input>
            {item}
          </label>
        </div>
      );
    });

    return (
      <div className="esrb-rating-list" aria-label="esrb-rating-list">
        <label>ESRB Rating:</label>
        {esrbRatingList}
      </div>
    );
  }
}

export default EsrbRatingList;
