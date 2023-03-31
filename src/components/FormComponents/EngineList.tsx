import React, { Component } from 'react';
import { engines } from '../../constants/form.constants';
import { InputProps } from '../../types/InputProps';

class EngineList extends Component<InputProps> {
  render() {
    const { label, selectRef, name } = this.props;

    const engineList = engines.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

    return (
      <div className="engine-list control" aria-label="engine-list">
        <label htmlFor="engine control__label">{label}:</label>
        <select id={name} ref={selectRef} className="control__input" aria-label={name}>
          {engineList}
        </select>
      </div>
    );
  }
}

export default EngineList;
