import React, { Component } from 'react';

class PlatformsList extends Component {
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
        <div key={item}>
          <label>
            <input type="checkbox" name="platforms" value={item}></input>
            {item}
          </label>
        </div>
      );
    });
    return (
      <div className="platforms-list" aria-label="platforms-list">
        <label>Platforms:</label>
        {platformsList}
      </div>
    );
  }
}

export default PlatformsList;
