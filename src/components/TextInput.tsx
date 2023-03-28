import React, { Component } from 'react';
import { InputProps } from '../types/InputProps';

class TextInput extends Component<InputProps> {
  render() {
    const { label, inputRef, name, errors, ...attributes } = this.props;
    return (
      <>
        <label className="control__label" htmlFor={name}>{`${label}:`}</label>
        <input
          id={name}
          ref={inputRef}
          className="control__input"
          aria-label={name}
          type="text"
          {...attributes}
        />
        {errors[name] && <span className="error-msg">{errors[name]}</span>}
      </>
    );
  }
}

export default TextInput;
