import React, { useContext, useEffect } from 'react'
import { Pokemon as PokemonType } from '../types/Pokemon';
import PokemonListElement from './PokemonListElement';
import Grid from '@material-ui/core/Grid';
import { withStyles, Paper, Theme } from '@material-ui/core';
import { Classes } from 'jss';
import LazyLoad from 'react-lazyload';
import { SearchContext } from './Pokedex';
import { forceCheck } from 'react-lazyload';

interface Props {
    pokemons: Array<PokemonType>
    classes: Classes
}

const styles = (theme: Theme) => ({
    paper: {
        height: 200,
        width: 250,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        '&:hover': {
            backgroundColor: '#41D3BD'
        }
    },
})

const PokemonList: React.FC<Props> = React.memo(({ pokemons, classes }) => {
    const searchTerm = useContext(SearchContext)

    const filteredPokemons = searchTerm ? pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : pokemons

    useEffect(() => {
        forceCheck()
    }, [searchTerm])

    return (
        <Grid container justify="center" spacing={16}>
            {filteredPokemons.map(
                pokemon => (
                    <Grid item key={pokemon.id}>
                        <Paper className={classes.paper}>
                            <LazyLoad height={200} once>
                                <PokemonListElement pokemon={pokemon} />
                            </LazyLoad>
                        </Paper>
                    </Grid>
                )
            )}
        </Grid>
    )
})

//@ts-ignore
export default withStyles(styles)(PokemonList)