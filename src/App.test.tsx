import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe('App', () => {
  it('test of presence of logo', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/RS-School React App/i)).toBeInTheDocument();
  });
});
