import React, { Component } from 'react';

export type SimpleInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
};

class SimpleInput extends Component<SimpleInputProps> {
  render() {
    const { label, ...attributes } = this.props;
    return (
      <>
        <label className="control__label" htmlFor={attributes.name}>{`${label}:`}</label>
        <input id={attributes.name} className="control__input" {...attributes}></input>
      </>
    );
  }
}

export default SimpleInput;
