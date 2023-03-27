import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Form from './Form';

describe('Form', () => {
  it('test of presence of Game text input', () => {
    render(<Form />);
    expect(screen.getByRole('textbox', { name: 'gameName' })).toBeInTheDocument();
  });

  it('test presence of 3 text inputs', () => {
    render(<Form />);
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
  });
});
