import React from 'react';
import { engines } from '../../constants/form.constants';
import { InputProps } from '../../types/InputProps';

function EngineList(props: InputProps) {
  const { label, name, register } = props;

  const engineList = engines.map((engine) => (
    <option key={engine} value={engine}>
      {engine}
    </option>
  ));

  return (
    <div className="engine-list control" aria-label="engine-list">
      <label htmlFor="engine control__label">{label}:</label>
      <select id={name} className="control__input" aria-label={name} {...register(name)}>
        {engineList}
      </select>
    </div>
  );
}

export default EngineList;
