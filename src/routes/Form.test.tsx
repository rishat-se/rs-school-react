import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it } from 'vitest';
import Form from './Form';

describe('Form', () => {
  it('test of presence of Game text input', () => {
    render(<Form />);
    expect(screen.getByLabelText('Game:')).toBeInTheDocument();
  });

  it('test presence of 3 text inputs', () => {
    render(<Form />);
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
  });

  it('test presence of First Release input', () => {
    render(<Form />);
    expect(screen.getByLabelText('First Release:')).toBeInTheDocument();
  });

  it('test create button click with empty input fields', async () => {
    const user = userEvent.setup();
    const { container } = render(<Form />);
    await user.click(screen.getByRole('button', { name: 'Create' }));
    expect(container.getElementsByClassName('error-msg')).toHaveLength(8);
  });
});
