import React, { Component } from 'react';
import { esrbRatings } from '../../constants/formConstants';
import { InputProps } from '../../types/InputProps';

class EsrbRatingList extends Component<InputProps> {
  render() {
    const { label, inputRefs, name, errors } = this.props;

    const esrbRatingList = esrbRatings.map((item, i) => {
      return (
        <div key={item} className="esrb__radiobox">
          <label className="esrb__label">
            {inputRefs && (
              <input
                className="esrb__input"
                ref={inputRefs[i]}
                type="radio"
                name={name}
                value={item}
              ></input>
            )}
            {item}
          </label>
        </div>
      );
    });

    return (
      <div className="esrb-rating-list control" aria-label="esrb-rating-list">
        <label className="control__label">{label}:</label>
        <div className="esrb__radioboxes">{esrbRatingList}</div>
        {errors.esrbRating && <span className="error-msg">{errors.esrbRating}</span>}
      </div>
    );
  }
}

export default EsrbRatingList;
