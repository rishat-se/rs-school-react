import React, { Component } from 'react';
import { engines } from '../constants/formConstants';
import { InputProps } from '../types/InputProps';

class EngineList extends Component<InputProps> {
  render() {
    const { label, inputRef, name, errors, ...attributes } = this.props;

    const engineList = engines.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

    return (
      <div className="engine-list control" aria-label="engine-list">
        <label htmlFor="engine">{label}:</label>
        <select
          id={name}
          ref={inputRef as React.RefObject<any>}
          className="control__input"
          aria-label={name}
          {...attributes}
        >
          {engineList}
        </select>
        {errors.engine && <span className="error-msg">{errors.engine}</span>}
      </div>
    );
  }
}

export default EngineList;
