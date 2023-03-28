import React, { Component } from 'react';
import { InputProps } from '../types/InputProps';
import { GameCardData } from './GameCard';

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
        {errors[name as keyof GameCardData] && (
          <span className="error-msg">{errors[name as keyof GameCardData]}</span>
        )}
      </>
    );
  }
}

export default TextInput;
