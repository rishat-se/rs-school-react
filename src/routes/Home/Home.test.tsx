import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Home from './Home';
import userEvent from '@testing-library/user-event';

describe('Home', () => {
  it('test of presence search input field', () => {
    render(<Home />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('test presence of 20 cards', async () => {
    render(<Home />);
    expect(await screen.findAllByRole('listitem', { name: 'card' })).toHaveLength(20);
  });

  it('test typing in aaaaa search input field typing and error ', async () => {
    const user = userEvent.setup();
    render(<Home />);
    const searchInput = screen.getByRole('searchbox');
    await user.type(searchInput, 'aaaaa');
    await user.click(screen.getByRole('button', { name: 'Search' }));
    expect(screen.getByRole('searchbox')).toHaveValue('aaaaa');
    expect(await screen.findByRole('searchbox')).toHaveValue('aaaaa');
  });

  it('test first card click, modal appearance and disappearence ', async () => {
    render(<Home />);
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
