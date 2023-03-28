import React, { Component } from 'react';
import { platforms } from '../constants/formConstants';
import { InputProps } from '../types/InputProps';

class PlatformsList extends Component<InputProps> {
  render() {
    const { label, inputRefs, name, errors, ...attributes } = this.props;

    const platformsList = platforms.map((item, i) => {
      return (
        <div className="platform-item" key={item}>
          <label className="platform-label">
            {inputRefs && (
              <input
                ref={inputRefs[i]}
                className="platform-checkbox"
                type="checkbox"
                name={name}
                value={item}
              ></input>
            )}
            {item}
          </label>
        </div>
      );
    });
    return (
      <div className="platforms-list control" aria-label="platforms-list">
        <label htmlFor="platforms">Platforms:</label>
        <div id={name} className="platform-items">
          {platformsList}
        </div>
        {errors.platforms && <span className="error-msg">{errors.platforms}</span>}
      </div>
    );
  }
}

export default PlatformsList;
