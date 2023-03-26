import React, { Component } from 'react';
import SimpleInput, { SimpleInputProps } from './SimpleInput';

class SimpleInputSet extends Component {
  readonly simpleInputs: SimpleInputProps[] = [
    {
      label: 'Game',
      name: 'game',
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
    {
      label: 'Load Thumbnail',
      name: 'imageFile',
      type: 'file',
    },
  ];
  render() {
    return this.simpleInputs.map((item) => <SimpleInput key={item.name} {...item} />);
  }
}

export default SimpleInputSet;
