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
      <div className="engine-list" aria-label="engine-list">
        <label>
          Engine:
          <select name="engine">{engineList}</select>
        </label>
        {this.props.errors.engine && <span className="error-msg">{this.props.errors.engine}</span>}
      </div>
    );
  }
}

export default EngineList;
