import React from 'react'
import { unstable_createResource } from "react-cache";
import { getPokemonCollection } from '../api/getPokemonCollection';
import { Pokemon } from '../api';

const PokemonCollectionResource = unstable_createResource(getPokemonCollection)

const PokemonList: React.SFC = () => (
    <>
        <h2>Pokemon Collection</h2>
        <ul>
            {PokemonCollectionResource.read('pokemons').results.map(
                (pokemon: Pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                )
            )}
        </ul>
    </>
)

export default PokemonList