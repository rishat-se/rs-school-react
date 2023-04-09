import {
  getByAltText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Home from './Home';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  it('test of presence search input field', () => {
    render(<Home />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('test of presence card list', () => {
    render(<Home />);
    expect(screen.getByRole('list', { name: 'card-list' })).toBeInTheDocument();
  });

  it('test presence of 20 cards', async () => {
    render(<Home />);
    expect(await screen.findAllByRole('listitem', { name: 'card' })).toHaveLength(20);
  });

  it('card click ', async () => {
    const { container } = render(<Home />);
    const user = userEvent.setup();
    const cards = await screen.findAllByRole('listitem', { name: 'card' });
    await user.click(cards[0]);
    expect(await screen.findByRole('article', { name: 'fullcard' })).toBeInTheDocument();
    const closeButton = await screen.findByRole('button', { name: '✖' });
    await user.click(closeButton);
    await waitFor(() =>
      expect(screen.queryByRole('article', { name: 'fullcard' })).not.toBeInTheDocument()
    );
  });
});
