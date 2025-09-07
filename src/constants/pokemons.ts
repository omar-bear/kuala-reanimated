export interface Pokemon {
  id: string;
  name: string;
  type: string;
  image: string;
}

export interface PokemonDetail {
  name: string;
  types: string[];
  imageUrl: string;
}

export const initialListAPokemons: Pokemon[] = [
  {
    id: '1',
    name: 'Bulbasaur',
    type: 'Grass',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  },
  {
    id: '2',
    name: 'Ivysaur',
    type: 'Grass',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
  },
  {
    id: '3',
    name: 'Venusaur',
    type: 'Grass',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
  },
  {
    id: '4',
    name: 'Squirtle',
    type: 'Water',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  },
  {
    id: '5',
    name: 'Wartortle',
    type: 'Water',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
  },
  {
    id: '6',
    name: 'Blastoise',
    type: 'Water',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
  },
];

export const initialListBPokemons: Pokemon[] = [
  {
    id: '10',
    name: 'Charmander',
    type: 'Fire',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  },
  {
    id: '11',
    name: 'Charmeleon',
    type: 'Fire',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  },
  {
    id: '12',
    name: 'Charizard',
    type: 'Fire',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
  },
];

export const pokemonsList3: PokemonDetail[] = [
  {
    name: 'Psyduck',
    types: ['Water'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
  },
  {
    name: 'Golduck',
    types: ['Water'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
  },
  {
    name: 'Mankey',
    types: ['Fighting'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
  },
  {
    name: 'Primeape',
    types: ['Fighting'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png',
  },
  {
    name: 'Growlithe',
    types: ['Fire'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
  },
  {
    name: 'Arcanine',
    types: ['Fire'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
  },
  {
    name: 'Poliwag',
    types: ['Water'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
  },
  {
    name: 'Poliwhirl',
    types: ['Water'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
  },
  {
    name: 'Poliwrath',
    types: ['Water', 'Fighting'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
  },
  {
    name: 'Abra',
    types: ['Psychic'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
  },
  {
    name: 'Kadabra',
    types: ['Psychic'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
  },
  {
    name: 'Alakazam',
    types: ['Psychic'],
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
  },
];
