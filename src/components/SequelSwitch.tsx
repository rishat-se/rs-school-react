import React, { Component } from 'react';
import { InputProps } from '../types/InputProps';

class SequelSwitch extends Component<InputProps> {
  render() {
    const { label, inputRefs, name, errors } = this.props;
    return (
      <div className="sequel__swicth control" aria-label="sequel-switch">
        <label className="control__label">{label}:</label>
        <div className="sequel__radioboxes">
          <div className="sequel__radiobox">
            <label className="sequel__label">
              {inputRefs && (
                <input
                  className="sequel__input"
                  ref={inputRefs[0]}
                  type="radio"
                  name={name}
                  value="Yes"
                ></input>
              )}
              Yes
            </label>
          </div>
          <div className="sequel__radiobox">
            <label className="sequel__label">
              {inputRefs && (
                <input
                  className="sequel__input"
                  ref={inputRefs[1]}
                  type="radio"
                  name={name}
                  value="No"
                ></input>
              )}
              No
            </label>
          </div>
        </div>
        {errors.isSequelAnnounced && <span className="error-msg">{errors.isSequelAnnounced}</span>}
      </div>
    );
  }
}

export default SequelSwitch;
