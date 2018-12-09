import React from 'react'
import { Pokemon } from '../types/Pokemon';

interface Props {
    pokemons: Array<Pokemon>
}

const PokemonList: React.SFC<Props> = ({ pokemons }) => (
    <div>
        <h2>Pokemon List</h2>
        <ul>
            {pokemons.map(
                pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                )
            )}
        </ul>
    </div>
)

export default PokemonList