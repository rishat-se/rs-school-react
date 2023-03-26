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
      <div>
        <label>
          {label}
          <input {...attributes}></input>
        </label>
      </div>
    );
  }
}

export default SimpleInput;
