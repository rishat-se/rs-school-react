import React, { Component } from 'react';
import { ControlErrors } from '../routes/Form';

class EsrbRatingList extends Component<{ errors: ControlErrors }> {
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
        {this.props.errors.esrbRating && (
          <span className="error-msg">{this.props.errors.esrbRating}</span>
        )}
      </div>
    );
  }
}

export default EsrbRatingList;
