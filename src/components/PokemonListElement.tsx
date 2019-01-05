import React, { useContext } from 'react'
import { Pokemon, PokedexContext as PContext, PokemonDetail } from '../types/Pokemon';
import { PokedexContext } from './Pokedex';
import { getPokemonById } from '../api/getPokemon';
import { CircularProgress, Grid, withStyles, Typography, Paper, Theme } from '@material-ui/core';
import { Classes } from 'jss';
import SuspendedImage from './SuspendedImage';
import { unstable_createResource } from 'react-cache';

interface Props {
    pokemon: Pokemon
    classes: Classes
}

const styles = (theme: Theme) => ({
    container: {
        height: '100%',
    },
    type: {
        padding: theme.spacing.unit
    },
    pokemonName: {
        textTransform: 'capitalize',
        borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    pokemonCharacteristics: {
        textAlign: 'left'
    }
})

const PokemonDataResource = unstable_createResource((id: number) =>
    getPokemonById(id).then(res => res.json())
);

const PokemonListElement: React.FC<Props> = React.memo(({ pokemon, classes }) => {
    const { setSelectedPokemon } = useContext(PokedexContext) as PContext
    const pokemonDetail = PokemonDataResource.read(pokemon.id) as PokemonDetail

    return (
        <Grid item container justify="center" direction="column" alignItems="center" spacing={16} className={classes.container} onClick={() => setSelectedPokemon(pokemonDetail)}>
            {pokemonDetail.sprites && (
                <React.Suspense fallback={<CircularProgress />}>
                    <Typography variant="h5" gutterBottom className={classes.pokemonName}>{pokemon.name}</Typography>
                    <Grid item container justify="space-between">
                        <Grid item>
                            <SuspendedImage src={pokemonDetail.sprites.front_default} />
                        </Grid>
                        <Grid item className={classes.pokemonCharacteristics}>
                            <Grid item>
                                <b>Height</b>
                                <Typography variant="body1" >{pokemonDetail.height}m</Typography>
                            </Grid>
                            <br />
                            <Grid item>
                                <b>Weight</b>
                                <Typography variant="body1">{pokemonDetail.weight}kg</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container justify="flex-end" spacing={8}>
                        {pokemonDetail.types.map(({ type }) =>
                            <Grid item key={`${pokemon.name}-${type.name}`} >
                                <Paper className={classes.type}>
                                    <Typography variant="body1">{type.name}</Typography>
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                </React.Suspense>
            )}
        </Grid>
    )
})

//@ts-ignore
export default withStyles(styles)(PokemonListElement)