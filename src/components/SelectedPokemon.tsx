import React from 'react'
import { PokemonDetail } from '../types/Pokemon';
import { Typography } from '@material-ui/core';

interface Props {
    pokemon: PokemonDetail
}

const SelectedPokemon: React.FC<Props> = ({ pokemon }) => {
    return (
        <Typography component="h5" variant="h5" align="center" gutterBottom>Selected Pokemon: {pokemon.species.name}</Typography>
    )
}

export default SelectedPokemon