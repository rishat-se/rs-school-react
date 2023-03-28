import React, { Component } from 'react';
import { InputProps } from '../types/InputProps';

class ImageFile extends Component<InputProps> {
  render() {
    const { label, inputRef, name, errors } = this.props;

    return (
      <div className="control">
        <div>
          <label htmlFor={name}>{label}:</label>
          <input ref={inputRef} id={name} type="file" name={name}></input>
        </div>
        {errors.imageFile && <span className="error-msg">{errors.imageFile}</span>}
      </div>
    );
  }
}

export default ImageFile;
