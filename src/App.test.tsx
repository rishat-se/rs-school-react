import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('test Home presence', () => {
    render(<App />);
    expect(screen.getByText(/home mock/i)).toBeInTheDocument();
  });
});
