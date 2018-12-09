interface Pokemon {
    name: string
    url: string
}

interface PokemonCollection {
    count: number
    results: Array<Pokemon>
}

export function getPokemonCollection(): PokemonCollection