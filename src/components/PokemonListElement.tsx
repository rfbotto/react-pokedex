import React, { useContext, useState, useEffect } from 'react'
import { Pokemon, PokedexContext as PContext, PokemonDetail } from '../types/Pokemon';
import { PokedexContext } from './Pokedex';
import { getPokemonById } from '../api/getPokemon';
import { CircularProgress, Grid } from '@material-ui/core';

interface Props {
    pokemon: Pokemon
}

const PokemonListElement: React.FC<Props> = React.memo(({ pokemon }) => {
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
        <Grid onClick={() => setSelectedPokemonId(pokemonId)}>
            {pokemonData.sprites ? (
                <>
                    <img src={pokemonData.sprites.front_default} />
                    <h3 key={pokemonId}>{pokemon.name}</h3>
                </>

            ) : <CircularProgress />}
        </Grid>
    )
})

export default PokemonListElement