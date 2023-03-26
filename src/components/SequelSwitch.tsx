import React, { Component } from 'react';
import { ControlErrors } from '../routes/Form';

class SequelSwitch extends Component<{ errors: ControlErrors }> {
  render() {
    return (
      <div className="sequel-swicth control" aria-label="sequel-switch">
        <label>Is sequel announced?:</label>
        <div>
          <label>
            <input type="radio" name="isSequelAnnounced" value="Yes"></input>
            Yes
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="isSequelAnnounced" value="No"></input>
            No
          </label>
        </div>
        {this.props.errors.isSequelAnnounced && (
          <span className="error-msg">{this.props.errors.isSequelAnnounced}</span>
        )}
      </div>
    );
  }
}

export default SequelSwitch;
