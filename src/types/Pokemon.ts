export interface Pokemon {
    name: string
    url: string
}

export interface PokemonList {
    results: Array<Pokemon>
}

export interface PokedexContext {
    setSelectedPokemonId: (id: number) => void
}