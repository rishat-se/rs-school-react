import React from 'react';
import { InputProps } from '../../types/InputProps';

function TextInput(props: InputProps) {
  const { label, name, errors, register } = props;
  return (
    <div className="control">
      <label className="control__label" htmlFor={name}>{`${label}:`}</label>
      <input
        id={name}
        className="control__input text__input"
        aria-label={name}
        type="text"
        {...register(name, {
          required: `Please enter ${label} name`,
          maxLength: { value: 10, message: 'Max length is 0 characters' },
        })}
      />
      {errors[name] !== undefined && typeof errors[name]!.message === 'string' && (
        <span className="error-msg">{errors[name]?.message as string}</span>
      )}
    </div>
  );
}

export default TextInput;
