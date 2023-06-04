import { CardData } from './CardData';

export type CharactersDTO = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CardData[];
};
