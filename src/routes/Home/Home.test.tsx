import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Home from './Home';

describe('Home', () => {
  it('test of presence search input field', () => {
    render(<Home />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('test of presence card list', () => {
    render(<Home />);
    expect(screen.getByRole('list', { name: 'card-list' })).toBeInTheDocument();
  });
});
