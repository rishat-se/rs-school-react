import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it } from 'vitest';
import { GameCardData } from '../../components/GameCard/GameCard';
import Form from './Form';
import { Provider } from 'react-redux';
import { store } from '../../redux/clientStore';

const mockCard: GameCardData = {
  id: 'e6baa828-8770-486a-91a2-e1f0e8f9cf38',
  gameName: 'Horizon Zero Dawn',
  developer: 'Guerrilla Games',
  publisher: 'Sony Interactive Entertainment',
  firstRelease: '2017-12-28',
  engine: 'Decima',
  esrbRating: 'Teen',
  platforms: ['Playstation 4', 'Windows'],
  isSequelAnnounced: 'Yes',
  imageFile: 'some_file.jpg',
};

describe('Form', () => {
  it('test of presence of Game text input', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByLabelText('Game:')).toBeInTheDocument();
  });

  it('test presence of 3 text inputs', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
  });

  it('test presence of First Release input', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByLabelText('First Release:')).toBeInTheDocument();
  });

  it('test create button click with empty input fields', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    await user.click(screen.getByRole('button', { name: 'Create' }));
    expect(container.getElementsByClassName('error-msg')).toHaveLength(8);
  });

  it('test create button click with filled input fields', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const gameName: HTMLInputElement = screen.getByLabelText(/game:/i);
    await user.type(gameName, mockCard.gameName);
    expect(gameName).toHaveValue(mockCard.gameName);

    const developer: HTMLInputElement = screen.getByLabelText(/developer:/i);
    await user.type(developer, mockCard.developer);
    expect(developer).toHaveValue(mockCard.developer);

    const publisher: HTMLInputElement = screen.getByLabelText(/publisher:/i);
    await user.type(publisher, mockCard.publisher);
    expect(publisher).toHaveValue(mockCard.publisher);

    const firstRelease: HTMLInputElement = screen.getByLabelText(/first/i);
    await user.type(firstRelease, mockCard.firstRelease);
    expect(firstRelease).toHaveValue(mockCard.firstRelease);

    const platformsMock0 = screen.getByRole('checkbox', { name: mockCard.platforms[0] });
    await user.click(platformsMock0);
    expect(platformsMock0).toBeChecked();

    const platformsMock1 = screen.getByRole('checkbox', { name: mockCard.platforms[1] });
    await user.click(platformsMock1);
    expect(platformsMock1).toBeChecked();

    const esrbRatingMock = screen.getByRole('radio', { name: mockCard.esrbRating });
    await user.click(esrbRatingMock);
    expect(esrbRatingMock).toBeChecked();

    const isSequelAnnouncedMock = screen.getByRole('radio', { name: mockCard.isSequelAnnounced });
    await user.click(isSequelAnnouncedMock);
    expect(isSequelAnnouncedMock).toBeChecked();

    const imageFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input: HTMLInputElement = screen.getByLabelText(/load thumbnail/i);
    await user.upload(input, imageFile);
    expect(input.files).toHaveLength(1);

    await user.click(screen.getByRole('button', { name: 'Create' }));
    expect(container.getElementsByClassName('error-msg')).toHaveLength(0);
  });
});
