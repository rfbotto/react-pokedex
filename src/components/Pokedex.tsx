import React, { useState } from 'react'
import PokemonListWrapper from './PokemonListWrapper'

export const PokedexContext = React.createContext({})

const Pokedex: React.SFC = () => {
    const [selectedPokemonId, setSelectedPokemonId] = useState(-1)

    return (
        <PokedexContext.Provider value={{ setSelectedPokemonId }}>
            <h3 style={{ textAlign: 'center' }}>Selected Pokemon ID: {selectedPokemonId > 0 ? selectedPokemonId : 'None'}</h3>
            <PokemonListWrapper />
        </PokedexContext.Provider>
    )
}

export default Pokedex