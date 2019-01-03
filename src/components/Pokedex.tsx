import React, { useState } from 'react'
import PokemonListWrapper from './PokemonListWrapper'
import { Pokemon } from '../types/Pokemon';
import { CircularProgress } from '@material-ui/core';

const PokemonDetail = React.lazy(() => import('./PokemonDetail'));

export const PokedexContext = React.createContext({})

const Pokedex: React.SFC = () => {
    const [selectedPokemon, setSelectedPokemon] = useState({} as Pokemon)

    return (
        <PokedexContext.Provider value={{ setSelectedPokemon }}>
            <React.Suspense fallback={<CircularProgress />}>
                {selectedPokemon.id && <PokemonDetail pokemon={selectedPokemon} />}
                <PokemonListWrapper />
            </React.Suspense>
        </PokedexContext.Provider>
    )
}

export default Pokedex