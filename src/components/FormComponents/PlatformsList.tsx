import React, { Component } from 'react';
import { platforms } from '../../constants/formConstants';
import { InputProps } from '../../types/InputProps';

class PlatformsList extends Component<InputProps> {
  render() {
    const { label, inputRefs, name, errors } = this.props;

    const platformsList = platforms.map((platform, i) => {
      return (
        <div className="platform__checkbox" key={platform}>
          <label className="platform__label">
            {inputRefs && (
              <input
                ref={inputRefs[i]}
                className="platform__input"
                type="checkbox"
                name={name}
                value={platform}
              />
            )}
            {platform}
          </label>
        </div>
      );
    });

    return (
      <div className="control platforms__list" aria-label="platforms-list">
        <label htmlFor="control__label platform__label">{label}:</label>
        <div id={name} className="platform__checkboxes">
          {platformsList}
        </div>
        {errors.platforms && <span className="error-msg">{errors.platforms}</span>}
      </div>
    );
  }
}

export default PlatformsList;
