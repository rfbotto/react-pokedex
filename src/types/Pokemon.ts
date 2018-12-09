export interface Pokemon {
    name: string
    url: string
}

export interface PokemonList {
    count: number
    results: Array<Pokemon>
}