import React, { useEffect, useState, useContext } from 'react'
import { getPokemonList } from '../api/getPokemonList';
import { PokemonList as PL, PokedexContext as PContext } from '../types/Pokemon';
import PokemonList from './PokemonList';
import { PokedexContext } from './Pokedex';

const PokemonListWrapper: React.SFC = () => {
    const [pokemonList, setPokemonList] = useState({ results: [] } as PL)
    const { setSelectedPokemonId } = useContext(PokedexContext) as PContext

    const fetchData = async () => {
        const response = await getPokemonList()
        const data = await response.json() as PL
        setPokemonList(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <PokemonList pokemons={pokemonList.results} onPokemonClick={(id: number) => setSelectedPokemonId(id)} />
    )
}

export default PokemonListWrapper