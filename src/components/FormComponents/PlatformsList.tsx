import React from 'react';
import { platforms } from '../../constants/form.constants';
import { InputProps } from '../../types/InputProps';

function PlatformsList(props: InputProps) {
  const { label, name, errors, register } = props;

  const platformsList = platforms.map((platform) => {
    return (
      <div className="platform__checkbox" key={platform}>
        <label className="platform__label">
          <input
            className="platform__input"
            type="checkbox"
            value={platform}
            {...register(name, { required: 'Please select at least one platform' })}
          />
          {platform}
        </label>
      </div>
    );
  });

  return (
    <div className="control platforms__list" aria-label="platforms-list">
      <label htmlFor="control__label platform__label">{label}:</label>
      <div id={name} className="platform__checkboxes">
        {platformsList}
      </div>
      {errors.platforms && typeof errors.platforms.message === 'string' && (
        <span className="error-msg">{errors.platforms.message}</span>
      )}
    </div>
  );
}

export default PlatformsList;
