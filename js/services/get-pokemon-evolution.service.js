import { getPokemonByName } from '../api/get-pokemon-api.js';
import {getPokemonSpeciesByUrl, getEvolutionChainByUrl} from '../api/get-pokemon-evolution-api.js';
import { PokemonEvolution } from '../../models/pokemon-evolution.model.js';

function extractEvolutionNames(chain) {
    const evolutions = [];
    let currentEvolution = chain;

    while (currentEvolution) {
        evolutions.push(currentEvolution.species.name);
        currentEvolution = currentEvolution.evolves_to[0];
    }

    return evolutions;
}

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