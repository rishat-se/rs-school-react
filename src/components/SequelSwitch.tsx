import React, { Component } from 'react';

class SequelSwitch extends Component {
  render() {
    return (
      <div className="sequel-swicth" aria-label="sequel-switch">
        <label>Is sequel announced?:</label>
        <div>
          <label>
            <input type="radio" name="isSequelAnnounced" value="yes"></input>
            Yes
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="isSequelAnnounced" value="no"></input>
            No
          </label>
        </div>
      </div>
    );
  }
}

export default SequelSwitch;
