import React, { useEffect, useState } from 'react'
import { getPokemonList } from '../api/getPokemonList';
import { PokemonList as PL } from '../types/Pokemon';
import PokemonList from './PokemonList';

const PokemonListWrapper: React.FC = React.memo(() => {
    const [pokemonList, setPokemonList] = useState({ results: [] } as PL)

    const fetchData = async () => {
        const response = await getPokemonList()
        const data = await response.json() as PL
        setPokemonList(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return <PokemonList pokemons={pokemonList.results.splice(0, pokemonList.results.length - 57)} />
})

export default PokemonListWrapper