import { Pokemon } from './../types/Pokemon';

export const filterPokemonList = (pokemons: Array<Pokemon>, searchTerm: string): Array<Pokemon> => {
    return searchTerm ? pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : pokemons
}