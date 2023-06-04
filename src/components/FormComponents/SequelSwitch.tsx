import React from 'react';
import { InputProps } from '../../types/InputProps';

function SequelSwitch(props: InputProps) {
  const { label, name, errors, register } = props;
  return (
    <div className="sequel__swicth control" aria-label="sequel-switch">
      <label className="control__label">{label}:</label>
      <div className="sequel__radioboxes">
        <div className="sequel__radiobox">
          <label className="sequel__label">
            <input
              className="sequel__input"
              type="radio"
              value="Yes"
              {...register(name, { required: 'Please select whether sequel was announced or not' })}
            />
            Yes
          </label>
        </div>
        <div className="sequel__radiobox">
          <label className="sequel__label">
            <input
              className="sequel__input"
              type="radio"
              value="No"
              {...register(name, { required: 'Please select whether sequel was announced or not' })}
            />
            No
          </label>
        </div>
      </div>
      {errors.isSequelAnnounced && typeof errors.isSequelAnnounced.message === 'string' && (
        <span className="error-msg">{errors.isSequelAnnounced.message}</span>
      )}
    </div>
  );
}

export default SequelSwitch;
