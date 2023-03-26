import React, { Component } from 'react';
import { ControlErrors } from '../routes/Form';

class PlatformsList extends Component<{ errors: ControlErrors }> {
  readonly platforms = [
    'Android',
    'iOS',
    'iPadOS',
    'Linux',
    'MacOS',
    'Nintendo Switch',
    'Playstation 3',
    'Playstation 4',
    'Playstation 5',
    'Xbox 360',
    'Xbox One',
    'Xbox Series X/S',
    'Windows',
  ];

  render() {
    const platformsList = this.platforms.map((item) => {
      return (
        <div className="platform-item" key={item}>
          <label className="platform-label">
            <input
              className="platform-checkbox"
              type="checkbox"
              name="platforms"
              value={item}
            ></input>
            {item}
          </label>
        </div>
      );
    });
    return (
      <div className="platforms-list control" aria-label="platforms-list">
        <label htmlFor="platforms">Platforms:</label>
        <div id="platforms" className="platform-items">
          {platformsList}
        </div>
        {this.props.errors.platforms && (
          <span className="error-msg">{this.props.errors.platforms}</span>
        )}
      </div>
    );
  }
}

export default PlatformsList;
