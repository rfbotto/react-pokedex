export interface Pokemon {
    id: number
    name: string
    url: string
}

export interface PokemonList {
    results: Array<Pokemon>
}

export interface PokedexContext {
    setSelectedPokemon: (pokemon: PokemonDetail) => void
}

export interface PokemonDetail {
    abilities: Array<Ability>
    base_experience: number
    forms: Array<Form>
    game_indices: Array<GameIndex>
    height: number
    held_items: Array<{}>
    id: number
    is_default: boolean
    order: number
    species: Resource
    sprites: Sprite
    stats: Array<Stat>
    types: Array<Type>
    weight: number
}

interface Ability {
    ability: Resource
    is_hidden: boolean
    slot: number
}

interface Form {
    name: string
    url: string
}

interface GameIndex {
    game_index: number
    version: Resource
}

interface Sprite {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

interface Stat {
    base_stat: number
    effort: number
    stat: Resource
}

interface Type {
    slot: number
    type: Resource
}

interface Resource {
    name: string
    url: string
}