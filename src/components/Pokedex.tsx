import React, { useState } from 'react'
import PokemonListWrapper from './PokemonListWrapper'
import { PokemonDetail } from '../types/Pokemon';
import { CircularProgress, Grid, MuiThemeProvider } from '@material-ui/core';
import Search from './Search';
import { theme } from '../design/theme';

const SelectedPokemon = React.lazy(() => import('./SelectedPokemon'));

export const PokedexContext = React.createContext({})
export const SearchContext = React.createContext('')

const Pokedex: React.FC = React.memo(() => {
    const [selectedPokemon, setSelectedPokemon] = useState({} as PokemonDetail)
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <PokedexContext.Provider value={{ setSelectedPokemon }}>
            <SearchContext.Provider value={searchTerm}>
                <MuiThemeProvider theme={theme}>
                    <Search value={searchTerm} handleChange={setSearchTerm} />
                    <Grid container alignItems='center' justify='center'>
                        <React.Suspense fallback={<CircularProgress />}>
                            {/* {selectedPokemon.id && <SelectedPokemon pokemon={selectedPokemon} />} */}
                            <PokemonListWrapper />
                        </React.Suspense>
                    </Grid>
                </MuiThemeProvider>
            </SearchContext.Provider>
        </PokedexContext.Provider >
    )
})

export default Pokedex