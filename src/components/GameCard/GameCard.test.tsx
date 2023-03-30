import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import GameCard, { GameCardData } from './GameCard';

const mockCard: GameCardData = {
  id: 'e6baa828-8770-486a-91a2-e1f0e8f9cf38',
  gameName: 'Horizon Zero Dawn',
  developer: 'Guerrilla Games',
  publisher: 'Sony Interactive Entertainment',
  firstRelease: '02-28-2017',
  engine: 'Decima',
  esrbRating: 'Teen',
  platforms: ['Playstation 4', 'Windows'],
  isSequelAnnounced: 'Yes',
  imageFile: 'some_file.jpg',
};

describe('GameCard', () => {
  it('test presence of Game Name', () => {
    render(<GameCard gameCard={mockCard} />);
    expect(screen.getByText(/horizon/i)).toBeInTheDocument();
  });
});
