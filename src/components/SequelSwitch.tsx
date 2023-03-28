import React, { Component } from 'react';
import { InputProps } from '../types/InputProps';

class SequelSwitch extends Component<InputProps> {
  render() {
    const { label, inputRefs, name, errors } = this.props;
    return (
      <div className="sequel-swicth control" aria-label="sequel-switch">
        <label>{label}:</label>
        <div>
          <label>
            {inputRefs && <input ref={inputRefs[0]} type="radio" name={name} value="Yes"></input>}
            Yes
          </label>
        </div>
        <div>
          <label>
            {inputRefs && <input ref={inputRefs[1]} type="radio" name={name} value="No"></input>}
            No
          </label>
        </div>
        {errors.isSequelAnnounced && <span className="error-msg">{errors.isSequelAnnounced}</span>}
      </div>
    );
  }
}

export default SequelSwitch;
