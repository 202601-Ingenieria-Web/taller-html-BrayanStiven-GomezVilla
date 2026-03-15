import { getPokemonByName } from '../api/get-pokemon-api.js';
import { Pokemon } from '../../models/pokemon.model.js';

export async function getPokemon(name) {
    const pokemonData = await getPokemonByName(name);

    if (!pokemonData) {
        throw new Error('No se pudo obtener la información del Pokémon');
    }

    return Pokemon.fromApi(pokemonData);
}