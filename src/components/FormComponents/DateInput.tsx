import React, { Component } from 'react';
import { InputProps } from '../../types/InputProps';

class DateInput extends Component<InputProps> {
  render() {
    const { label, inputRef, name, errors, ...attributes } = this.props;
    return (
      <div className="control">
        <label className="control__label" htmlFor={name}>{`${label}:`}</label>
        <input
          id={name}
          type="date"
          ref={inputRef}
          className="control__input"
          aria-label={name}
          {...attributes}
        />
        {errors.firstRelease && <span className="error-msg">{errors.firstRelease}</span>}
      </div>
    );
  }
}

export default DateInput;
