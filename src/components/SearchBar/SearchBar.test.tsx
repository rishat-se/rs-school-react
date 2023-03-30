import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it } from 'vitest';
import SearchBar from './SearchBar';

describe('Searchbar', () => {
  it('test of presence search input field', () => {
    render(<SearchBar />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('test Search button click', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const searchInput = screen.getByRole('searchbox');
    await user.type(searchInput, 'abcdef');
    expect(screen.getByRole('searchbox')).toHaveValue('abcdef');
  });
});
