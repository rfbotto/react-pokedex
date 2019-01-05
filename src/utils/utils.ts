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

const between = (value: number, min: number, max: number): boolean => (
    value >= min && value <= max
)

export const getGenerationById = (id: number): string => {
    // 1st generation 1-151
    if (between(id, 1, 151)) return 'I'
    // 2nd generation 152-251
    if (between(id, 152, 251)) return 'II'
    // 3rd generation 252-386
    if (between(id, 252, 386)) return 'III'
    // 4th generation 387-493
    if (between(id, 387, 493)) return 'IV'
    // 5th generation 494-649
    if (between(id, 494, 649)) return 'V'
    // 6th generation 650-721
    if (between(id, 650, 721)) return 'VI'
    // 7th generation 722-809
    if (between(id, 722, 809)) return 'VII'

    return ''
}
