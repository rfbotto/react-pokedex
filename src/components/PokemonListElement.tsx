import React, { useContext, useState, useEffect } from 'react'
import { Pokemon, PokedexContext as PContext, PokemonDetail } from '../types/Pokemon';
import { PokedexContext } from './Pokedex';
import { getPokemonById } from '../api/getPokemon';
import { CircularProgress, Grid, withStyles } from '@material-ui/core';
import { Classes } from 'jss';

interface Props {
    pokemon: Pokemon
    classes: Classes
}

const styles = () => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
    }
})

const PokemonListElement: React.FC<Props> = React.memo(({ pokemon, classes }) => {
    const { setSelectedPokemonId } = useContext(PokedexContext) as PContext
    const [pokemonData, setSelectedPokemonData] = useState({} as PokemonDetail)

    const pokemonId = parseInt(pokemon.url.split('/')[6])

    const fetchPokemonData = async () => {
        const response = await getPokemonById(pokemonId)
        const data = await response.json()
        setSelectedPokemonData(data)
    }

    useEffect(() => {
        fetchPokemonData()
    }, []);

    return (
        <Grid onClick={() => setSelectedPokemonId(pokemonId)} className={classes.container}>
            {pokemonData.sprites ? (
                <>
                    <img src={pokemonData.sprites.front_default} />
                    <h3 key={pokemonId}>{pokemon.name}</h3>
                </>
            ) : <CircularProgress />}
        </Grid>
    )

})

//@ts-ignore
export default withStyles(styles)(PokemonListElement)