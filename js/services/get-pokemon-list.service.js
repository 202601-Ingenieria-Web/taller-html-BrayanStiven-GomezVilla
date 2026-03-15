import { getPokemonPage } from '../api/get-pokemon-list-api.js';
import { getPokemonByName } from '../api/get-pokemon-api.js';
import { Pokemon } from '../../models/pokemon.model.js';

export async function getPokemonList(page, pageSize) {
    const offset = (page - 1) * pageSize;
    const pageData = await getPokemonPage(pageSize, offset);

    if (!pageData?.results || !Array.isArray(pageData.results)) {
        throw new Error('No se pudo obtener la lista de Pokémon');
    }

    // Fetches the current page and then loads each Pokemon detail
    // to return a complete list mapped to the domain model.
    const pokemonDetails = await Promise.all(
        pageData.results.map((pokemonItem) => getPokemonByName(pokemonItem.name))
    );

    return {
        count: pageData.count,
        pokemons: pokemonDetails.map((pokemonData) => Pokemon.fromApi(pokemonData))
    };
}