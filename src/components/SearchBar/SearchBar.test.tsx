import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it } from 'vitest';
import SearchBar from './SearchBar';

describe('Searchbar', async () => {
  it('test of presence search input field', () => {
    render(<SearchBar />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('test typing in search input field typing and search button click ', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const searchInput = screen.getByRole('searchbox');
    await user.type(searchInput, 'abcdef');
    await user.click(screen.getByRole('button', { name: 'Search' }));
    expect(screen.getByRole('searchbox')).toHaveValue('abcdef');
  });
});
