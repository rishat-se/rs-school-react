import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('test of presence of logo', () => {
    render(<App />);
    expect(screen.getByText(/RS-School React App/i)).toBeInTheDocument();
  });
});
