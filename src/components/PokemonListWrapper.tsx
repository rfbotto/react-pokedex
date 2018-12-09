import React, { useEffect, useState, lazy } from 'react'
import { getPokemonList } from '../api/getPokemonList';
import { PokemonList as PL } from '../types/Pokemon';

const PokemonList = lazy(() => import('./PokemonList'))

const PokemonListWrapper: React.SFC = () => {
    const initialState: PL = { count: 0, results: [] }
    const [pokemonList, setPokemonList] = useState(initialState)

    const fetchData = async () => {
        const response = await getPokemonList()
        const data = await response.json() as PL
        setPokemonList(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return <PokemonList pokemons={pokemonList.results} />
}


export default PokemonListWrapper