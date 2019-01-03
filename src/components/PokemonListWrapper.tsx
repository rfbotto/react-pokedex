import React, { useEffect, useState } from 'react'
import { getPokemonList } from '../api/getPokemonList';
import { PokemonList as PL } from '../types/Pokemon';
import PokemonList from './PokemonList';

const PokemonListWrapper: React.FC = React.memo(() => {
    const [pokemonList, setPokemonList] = useState({ results: [] } as PL)

    const fetchData = async () => {
        const pokemons = await getPokemonList() as PL
        setPokemonList(pokemons)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return <PokemonList pokemons={pokemonList.results} />
})

export default PokemonListWrapper