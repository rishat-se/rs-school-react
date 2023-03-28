import React, { Component } from 'react';
import { InputProps } from '../types/InputProps';

class DateInput extends Component<InputProps> {
  render() {
    const { label, inputRef, name, errors, ...attributes } = this.props;
    return (
      <>
        <label className="control__label" htmlFor={name}>{`${label}:`}</label>
        <input
          id={name}
          type="date"
          ref={inputRef as React.RefObject<any>}
          className="control__input"
          aria-label={name}
          {...attributes}
        />
        {errors[name] && <span className="error-msg">{errors[name]}</span>}
      </>
    );
  }
}

export default DateInput;
