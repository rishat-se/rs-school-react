import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import SearchBar from './SearchBar';

describe('Searchbar', () => {
  it('test of presence search input field', () => {
    render(<SearchBar />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
