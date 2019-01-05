import React, { useContext } from 'react'
import { Pokemon, PokedexContext as PContext, PokemonDetail } from '../types/Pokemon';
import { PokedexContext } from './Pokedex';
import { getPokemonById } from '../api/getPokemon';
import { CircularProgress, Grid, withStyles, Typography } from '@material-ui/core';
import { Classes } from 'jss';
import SuspendedImage from './SuspendedImage';
import { unstable_createResource } from 'react-cache';

interface Props {
    pokemon: Pokemon
    classes: Classes
}

const styles = () => ({
    container: {
        height: '100%',
    }
})

const PokemonDataResource = unstable_createResource((id: number) =>
    getPokemonById(id).then(res => res.json())
);

const PokemonListElement: React.FC<Props> = React.memo(({ pokemon, classes }) => {
    const { setSelectedPokemon } = useContext(PokedexContext) as PContext
    const pokemonDetail = PokemonDataResource.read(pokemon.id) as PokemonDetail

    return (
        <Grid container justify="center" direction="column" alignItems="center" spacing={16} className={classes.container}>
            <Grid item onClick={() => setSelectedPokemon(pokemonDetail)}>
                {pokemonDetail.sprites && (
                    <React.Suspense fallback={<CircularProgress />}>
                        <SuspendedImage src={pokemonDetail.sprites.front_default} />
                        <Typography component="h6" variant="h6" key={pokemon.id}>{pokemon.name}</Typography>
                    </React.Suspense>
                )}
            </Grid>
        </Grid>
    )
})

export default withStyles(styles)(PokemonListElement)