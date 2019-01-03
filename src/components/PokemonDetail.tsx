import React from 'react'
import { Pokemon } from '../types/Pokemon';
import { Typography } from '@material-ui/core';

interface Props {
    pokemon: Pokemon
}

const PokemonDetail: React.FC<Props> = ({ pokemon }) => {
    return (
        <Typography component="h5" variant="h5" align="center" gutterBottom>Selected Pokemon: {pokemon.name}</Typography>
    )
}

export default PokemonDetail