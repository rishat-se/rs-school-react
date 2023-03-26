import React, { Component } from 'react';
import { ControlErrors } from '../routes/Form';

class EngineList extends Component<{ errors: ControlErrors }> {
  readonly engineList = [
    'Unreal',
    'Unity',
    'Source',
    'Cryengine',
    'Gamebryo',
    'IW',
    'Anvil',
    'id Tech',
    'Essence',
    'Clausewitz',
  ];
  render() {
    const engineList = this.engineList.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

    return (
      <div className="engine-list control" aria-label="engine-list">
        <label htmlFor="engine">Engine:</label>
        <select id="engine" name="engine">
          {engineList}
        </select>
        {this.props.errors.engine && <span className="error-msg">{this.props.errors.engine}</span>}
      </div>
    );
  }
}

export default EngineList;
