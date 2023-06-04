export type CardData = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
};

const cards: CardData[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)' },
    location: { name: 'Citadel of Ricks' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown' },
    location: { name: 'Citadel of Ricks' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
  {
    id: 4,
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
  },
  {
    id: 5,
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  },
  {
    id: 6,
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    species: 'Alien',
    type: '',
    gender: 'Female',
    origin: { name: 'Abadango' },
    location: { name: 'Abadango' },
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
  },
  {
    id: 7,
    name: 'Abradolf Lincler',
    status: 'unknown',
    species: 'Human',
    type: 'Genetic experiment',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
    },
    location: {
      name: 'Testicle Monster Dimension',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
  },
  {
    id: 8,
    name: 'Adjudicator Rick',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown' },
    location: { name: 'Citadel of Ricks' },
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
  },
  {
    id: 9,
    name: 'Agency Director',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
  },
  {
    id: 10,
    name: 'Alan Rails',
    status: 'Dead',
    species: 'Human',
    type: 'Superhuman (Ghost trains summoner)',
    gender: 'Male',
    origin: { name: 'unknown' },
    location: {
      name: "Worldender's lair",
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
  },
];

export default cards;
