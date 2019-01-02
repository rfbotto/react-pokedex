import React, { useState } from 'react'
import PokemonListWrapper from './PokemonListWrapper'

export const PokedexContext = React.createContext({})

const Pokedex: React.SFC = () => {
    const [selectedPokemonId, setSelectedPokemonId] = useState(-1)

    return (
        <PokedexContext.Provider value={{ setSelectedPokemonId }}>
            {selectedPokemonId > 0 && <h3>Selected Pokemon: {selectedPokemonId}</h3>}
            <PokemonListWrapper />
        </PokedexContext.Provider>
    )
}

export default Pokedex