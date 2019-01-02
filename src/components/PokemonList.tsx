import React from 'react'
import { Pokemon as PokemonType } from '../types/Pokemon';
import PokemonListElement from './PokemonListElement';
import Grid from '@material-ui/core/Grid';
import { withStyles, Paper } from '@material-ui/core';
import { Classes } from 'jss';
import LazyLoad from 'react-lazyload';

interface Props {
    pokemons: Array<PokemonType>
    classes: Classes
}

const styles = () => ({
    paper: {
        height: 200,
        width: 250,
    },
})

const PokemonList: React.FC<Props> = ({ pokemons, classes }) => (
    <Grid container spacing={16}>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
                {pokemons.map(
                    pokemon => (
                        <Paper key={pokemon.name} className={classes.paper}>
                            <LazyLoad height={200}>
                                <PokemonListElement pokemon={pokemon} />
                            </LazyLoad>
                        </Paper>
                    )
                )}
            </Grid>
        </Grid>
    </Grid>
)

export default withStyles(styles)(PokemonList)