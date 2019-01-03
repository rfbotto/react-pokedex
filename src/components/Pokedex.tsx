import React, { useState } from 'react'
import PokemonListWrapper from './PokemonListWrapper'
import { Pokemon } from '../types/Pokemon';

export const PokedexContext = React.createContext({})

const Pokedex: React.SFC = () => {
    const [selectedPokemon, setSelectedPokemon] = useState({} as Pokemon)

    return (
        <PokedexContext.Provider value={{ setSelectedPokemon }}>
            <h3 style={{ textAlign: 'center' }}>Selected Pokemon ID: {selectedPokemon ? selectedPokemon.id : 'None'}</h3>
            <PokemonListWrapper />
        </PokedexContext.Provider>
    )
}

export default Pokedex