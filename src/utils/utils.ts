import { Pokemon } from './../types/Pokemon';

export const filterPokemonList = (pokemons: Array<Pokemon>, searchTerm: string): Array<Pokemon> => {
    return searchTerm ? pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : pokemons
}

export const formatHeight = (height: number): number => (
    height * 10
)

export const formatWeight = (weight: number): string => (
    parseFloat(`${weight * 0.1}`).toPrecision(3)
)