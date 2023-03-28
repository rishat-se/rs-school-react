import React, { Component } from 'react';
import { ControlErrors } from '../routes/Form';
import { InputProps } from '../types/InputProps';

class ImageFile extends Component<InputProps> {
  render() {
    const { label, inputRef, name, errors, ...attributes } = this.props;

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
