import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL } from '../constants/constants';
import { CharactersDTO } from '../types/CharactersDTO';
import { CardData } from '../types/CardData';

export const rickandmortyApi = createApi({
  reducerPath: 'rickandmortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    searchByName: builder.query<CharactersDTO, string>({
      query: (searchValue) => `character/?name=${searchValue}`,
    }),
    getById: builder.query<CardData, string>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useSearchByNameQuery, useGetByIdQuery } = rickandmortyApi;
