import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
    // render(<Form />);
    const { container } = render(<Form />);
    await user.click(screen.getByRole('button', { name: 'Create' }));
    // await waitFor(() => screen.getByLabelText('Game:'));
    // fireEvent.click(screen.getByRole('button', { name: 'Create' }));
    // await waitFor(() => screen.getByText('error-msg'));
    //    await screen.getByText('error-msg');
    expect(container.getElementsByClassName('error-msg')).toHaveLength(8);
    // expect(screen.getByText('error-msg')).toHaveLength(8);
  });
});
