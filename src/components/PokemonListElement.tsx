import React, { useContext, useState, useEffect } from 'react'
import { Pokemon, PokedexContext as PContext, PokemonDetail } from '../types/Pokemon';
import { PokedexContext } from './Pokedex';
import { getPokemonById } from '../api/getPokemon';
import { CircularProgress, Grid, withStyles, Typography } from '@material-ui/core';
import { Classes } from 'jss';
import SuspendedImage from './SuspendedImage';

interface Props {
    pokemon: Pokemon
    classes: Classes
}

const styles = () => ({
    container: {
        height: '100%',
    }
})

const PokemonListElement: React.FC<Props> = React.memo(({ pokemon, classes }) => {
    const { setSelectedPokemon } = useContext(PokedexContext) as PContext
    const [pokemonData, setSelectedPokemonData] = useState({} as PokemonDetail)

    const fetchPokemonData = async () => {
        const response = await getPokemonById(pokemon.id)
        const data = await response.json()
        setSelectedPokemonData(data)
    }

    useEffect(() => {
        fetchPokemonData()
    }, []);

    return (
        <Grid container justify="center" direction="column" alignItems="center" spacing={16} className={classes.container}>
            <Grid item onClick={() => setSelectedPokemon(pokemonData)}>
                {pokemonData.sprites && (
                    <React.Suspense fallback={<CircularProgress />}>
                        <SuspendedImage src={pokemonData.sprites.front_default} />
                        <Typography component="h6" variant="h6" key={pokemon.id}>{pokemon.name}</Typography>
                    </React.Suspense>
                )}
            </Grid>
        </Grid>
    )

})

//@ts-ignore
export default withStyles(styles)(PokemonListElement)