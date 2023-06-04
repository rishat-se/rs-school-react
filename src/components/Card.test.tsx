import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Card from './Card';
import cards from '../data/cards';

describe('Card', () => {
  it('test presence of 6 list items', () => {
    render(<Card card={cards[0]} />);
    expect(screen.getAllByRole('listitem', { name: 'character-property' })).toHaveLength(6);
  });

  it('test name presence', () => {
    render(<Card card={cards[0]} />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
  });
});
