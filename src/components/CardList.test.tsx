import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import CardList from './CardList';

describe('CardList', () => {
  it('test of presence card-list', () => {
    render(<CardList />);
    expect(screen.getByRole('list', { name: 'card-list' })).toBeInTheDocument();
  });

  it('test presence of 10 cards', () => {
    render(<CardList />);
    expect(screen.getAllByRole('listitem', { name: 'card' })).toHaveLength(10);
  });
});
