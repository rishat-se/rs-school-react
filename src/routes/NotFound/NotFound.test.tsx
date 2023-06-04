import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import NotFound from './NotFound';

describe('Not Found Page', () => {
  it('test of presence of 404 header', () => {
    render(<NotFound />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
