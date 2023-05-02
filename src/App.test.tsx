import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StaticRouter } from 'react-router-dom/server';

describe('App', () => {
  it('test of presence of logo', () => {
    render(
      <StaticRouter location="">
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
