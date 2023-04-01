import React from 'react';
import { InputProps } from '../../types/InputProps';

function ImageFile(props: InputProps) {
  const { label, name, errors, register } = props;

  return (
    <div className="control">
      <label className="control__label" htmlFor={name}>
        {label}:
      </label>
      <input
        className="control__input"
        id={name}
        type="file"
        {...register(name, { required: 'Please select a file for thumbnail of the game' })}
      />
      {errors.imageFile && typeof errors.imageFile.message === 'string' && (
        <span className="error-msg">{errors.imageFile.message}</span>
      )}
    </div>
  );
}

export default ImageFile;
