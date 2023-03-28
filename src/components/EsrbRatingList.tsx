import React, { Component } from 'react';
import { esrbRatings } from '../constants/formConstants';
import { InputProps } from '../types/InputProps';

class EsrbRatingList extends Component<InputProps> {
  render() {
    const { label, inputRefs, name, errors } = this.props;

    const esrbRatingList = esrbRatings.map((item, i) => {
      return (
        <div key={item} className="esrb-item">
          <label>
            {inputRefs && <input ref={inputRefs[i]} type="radio" name={name} value={item}></input>}
            {item}
          </label>
        </div>
      );
    });

    return (
      <div className="esrb-rating-list control" aria-label="esrb-rating-list">
        <label>{label}:</label>
        <div className="esrb-items">{esrbRatingList}</div>
        {errors.esrbRating && <span className="error-msg">{errors.esrbRating}</span>}
      </div>
    );
  }
}

export default EsrbRatingList;
