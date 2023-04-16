import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../constants/constants';
import { CharactersDTO } from '../types/CharactersDTO';

export const rickandmortyApi = createApi({
  reducerPath: 'rickandmortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    searchByName: builder.query<CharactersDTO, string>({
      query: (searchValue) => `character/?name=${searchValue}`,
    }),
  }),
});

export const { useSearchByNameQuery } = rickandmortyApi;
