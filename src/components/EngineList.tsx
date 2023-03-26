import React, { Component } from 'react';

class EngineList extends Component {
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
      </div>
    );
  }
}

export default EngineList;
