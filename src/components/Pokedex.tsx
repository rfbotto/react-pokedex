import React, { useState } from 'react'
import PokemonListWrapper from './PokemonListWrapper'
import { PokemonDetail } from '../types/Pokemon';
import { CircularProgress } from '@material-ui/core';
import SearchBox from './SearchBox';

const SelectedPokemon = React.lazy(() => import('./SelectedPokemon'));

export const PokedexContext = React.createContext({})
export const SearchContext = React.createContext('')

const Pokedex: React.SFC = () => {
    const [selectedPokemon, setSelectedPokemon] = useState({} as PokemonDetail)
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <PokedexContext.Provider value={{ setSelectedPokemon }}>
            <SearchContext.Provider value={searchTerm}>
                <SearchBox value={searchTerm} handleChange={setSearchTerm} />
                <React.Suspense fallback={<CircularProgress />}>
                    {/* {selectedPokemon.id && <SelectedPokemon pokemon={selectedPokemon} />} */}
                    <PokemonListWrapper />
                </React.Suspense>
            </SearchContext.Provider>
        </PokedexContext.Provider>
    )
}

export default Pokedex