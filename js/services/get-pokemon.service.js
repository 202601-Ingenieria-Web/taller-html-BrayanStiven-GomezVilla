import { getPokemonByName } from '../api/get-pokemon-api.js';

export async function getPokemon(name) {
    const pokemonData = await getPokemonByName(name);

    if (!pokemonData) {
        throw new Error('No se pudo obtener la información del Pokémon');
    }

    return {
        name: pokemonData.name,
        id: pokemonData.id,
        image: pokemonData.sprites.front_default,
        types: pokemonData.types.map(typeInfo => typeInfo.type.name),
        height: `${pokemonData.height / 10} m`,
        skills: pokemonData.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')
    };
}