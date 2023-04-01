import React from 'react';
import { InputProps } from '../../types/InputProps';

function DateInput(props: InputProps) {
  const { label, name, errors, register } = props;
  return (
    <div className="control">
      <label className="control__label" htmlFor={name}>{`${label}:`}</label>
      <input
        id={name}
        type="date"
        className="control__input"
        aria-label={name}
        {...register(name, { required: 'Please enter first release date' })}
      />
      {errors.firstRelease && typeof errors.firstRelease.message === 'string' && (
        <span className="error-msg">{errors.firstRelease?.message}</span>
      )}
    </div>
  );
}

export default DateInput;
