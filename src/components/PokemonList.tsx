import React from 'react'
// @ts-ignore react-cache types are outdated
import { createCache, createResource } from "react-cache";
import { getPokemonCollection } from '../api/getPokemonCollection';
import { Pokemon } from '../api';

const PokemonCollectionResource = createResource(getPokemonCollection)
const cache = createCache()

const PokemonList: React.SFC = () => (
    <>
        <h2>Pokemon Collection</h2>
        <ul>
            {PokemonCollectionResource.read(cache).results.map(
                (pokemon: Pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                )
            )}
        </ul>
    </>
)

export default PokemonList