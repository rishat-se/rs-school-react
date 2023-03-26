import React, { Component } from 'react';
import { ControlErrors } from '../routes/Form';
import SimpleInput, { SimpleInputProps } from './SimpleInput';

class SimpleInputSet extends Component<{ errors: ControlErrors }> {
  readonly simpleInputs: SimpleInputProps[] = [
    {
      label: 'Game',
      name: 'gameName',
      type: 'text',
      placeholder: 'Enter Game Name',
    },
    {
      label: 'Developer',
      name: 'developer',
      type: 'text',
      placeholder: 'Enter Game Developer',
    },
    {
      label: 'Publisher',
      name: 'publisher',
      type: 'text',
      placeholder: 'Enter Game Pablisher',
    },
    {
      label: 'First Release',
      name: 'firstRelease',
      type: 'date',
    },
  ];
  render() {
    return this.simpleInputs.map((item) => {
      return (
        <div key={item.name} className="control">
          <SimpleInput {...item} />
          {this.props.errors[item.name] && (
            <span className="error-msg">{this.props.errors[item.name]}</span>
          )}
        </div>
      );
    });
  }
}

export default SimpleInputSet;
