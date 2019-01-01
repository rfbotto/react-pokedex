import React from 'react'
import { Pokemon } from '../types/Pokemon';

interface Props {
    pokemons: Array<Pokemon>
    onPokemonClick: (id: number) => void
}

const PokemonList: React.SFC<Props> = ({ pokemons, onPokemonClick }) => (
    <div>
        <h2>Pokemon List</h2>
        <ul>
            {pokemons.map(
                pokemon => {
                    const pokemonId = parseInt(pokemon.url.split('/')[6])
                    return <li key={pokemonId} onClick={() => onPokemonClick(pokemonId)}>{pokemon.name}</li>
                }
            )}
        </ul>
    </div>
)

export default PokemonList