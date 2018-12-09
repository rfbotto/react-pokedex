export const getPokemonCollection = () =>
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())