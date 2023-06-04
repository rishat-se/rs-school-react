import React from 'react';
import { esrbRatings } from '../../constants/form.constants';
import { InputProps } from '../../types/InputProps';

function EsrbRatingList(props: InputProps) {
  const { label, name, errors, register } = props;

  const esrbRatingList = esrbRatings.map((rating) => {
    return (
      <div key={rating} className="esrb__radiobox">
        <label className="esrb__label">
          <input
            className="esrb__input"
            type="radio"
            value={rating}
            {...register(name, { required: 'Please select assigned ESRB rating' })}
          />
          {rating}
        </label>
      </div>
    );
  });

  return (
    <div className="esrb-rating-list control" aria-label="esrb-rating-list">
      <label className="control__label">{label}:</label>
      <div className="esrb__radioboxes">{esrbRatingList}</div>
      {errors.esrbRating && typeof errors.esrbRating.message === 'string' && (
        <span className="error-msg">{errors.esrbRating.message}</span>
      )}
    </div>
  );
}

export default EsrbRatingList;
