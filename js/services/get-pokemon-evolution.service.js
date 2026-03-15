import { getPokemonByName } from '../api/get-pokemon-api.js';
import { getPokemonSpeciesByUrl, getEvolutionChainByUrl } from '../api/get-pokemon-evolution-api.js';
import { PokemonEvolution } from '../../models/pokemon-evolution.model.js';

// Traverses the main evolution path and collects each species name
// by following the first available evolution in the chain.
function extractEvolutionNames(chain) {
    const evolutions = [];
    let currentEvolution = chain;

    while (currentEvolution) {
        evolutions.push(currentEvolution.species.name);
        currentEvolution = currentEvolution.evolves_to[0];
    }

    return evolutions;
}

// Resolves the pokemon species and evolution chain URLs
// to build the final evolution list with complete pokemon data.
export async function getPokemonEvolution(name) {
    const pokemonData = await getPokemonByName(name);

    if (!pokemonData?.species?.url) {
        throw new Error('No se pudo obtener la especie del Pokémon');
    }

    const speciesData = await getPokemonSpeciesByUrl(pokemonData.species.url);

    if (!speciesData?.evolution_chain?.url) {
        throw new Error('No se pudo obtener la cadena evolutiva');
    }

    const evolutionChainData = await getEvolutionChainByUrl(speciesData.evolution_chain.url);
    const evolutionNames = extractEvolutionNames(evolutionChainData.chain);

    const evolutionPokemons = await Promise.all(
        evolutionNames.map((evolutionName) => getPokemonByName(evolutionName))
    );

    return PokemonEvolution.fromApi(evolutionPokemons);
}