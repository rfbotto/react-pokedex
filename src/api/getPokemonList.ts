import { Pokemon } from './../types/Pokemon';

const NUMBER_OF_POKEMONS_TO_REMOVE = 57

export const getPokemonList = () => fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(res => (
        {
            ...res,
            results: res.results
                .splice(0, res.results.length - NUMBER_OF_POKEMONS_TO_REMOVE)
                .map((pokemon: Pokemon) => ({ ...pokemon, id: parseInt(pokemon.url.split('/')[6]) }))
        }))