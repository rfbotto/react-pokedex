import React from 'react'
import { getPokemonList } from '../api/getPokemonList';
import PokemonList from './PokemonList';
import { unstable_createResource } from 'react-cache';

const PokemonListResource = unstable_createResource(() => getPokemonList())

const PokemonListWrapper: React.FC = React.memo(() => {
    const pokemonList = PokemonListResource.read('pokemon-list')
    return <PokemonList pokemons={pokemonList.results} />
})

export default PokemonListWrapper