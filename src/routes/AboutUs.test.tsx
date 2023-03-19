import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import AboutUs from './AboutUs';

describe('Searchbar', () => {
  it('test of presence search input field', () => {
    render(<AboutUs />);
    expect(screen.getByText(/lorem/i)).toBeInTheDocument();
  });
});
