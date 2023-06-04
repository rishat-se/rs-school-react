import { rest } from 'msw';
import * as mockResponse from './mockResponse.json';
import { API_URL } from '../constants/constants';

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    const name = req.url.searchParams.get('name');
    // if search parametr present return empty string, otherwise return mock cards array
    return name === 'aaaaa'
      ? res(ctx.status(404), ctx.json(''))
      : res(ctx.status(200), ctx.json(mockResponse));
  }),

  rest.get(`${API_URL}/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponse.results[0]));
  }),

  rest.get(`${API_URL}/2`, (req, res, ctx) => {
    return res(ctx.status(404), ctx.json(''));
  }),
];
