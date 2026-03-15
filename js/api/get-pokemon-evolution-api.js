export async function getPokemonSpeciesByUrl(speciesUrl) {
    const response = await fetch(speciesUrl);

    if (!response.ok) {
        throw new Error('No se pudo obtener la especie del Pokémon');
    }

    return await response.json();
}

export async function getEvolutionChainByUrl(evolutionChainUrl) {
    const response = await fetch(evolutionChainUrl);

    if (!response.ok) {
        throw new Error('No se pudo obtener la cadena evolutiva');
    }

    return await response.json();
}