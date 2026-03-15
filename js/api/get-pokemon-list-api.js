import { getBaseUrl } from '../utils/get-base.url.js';

export async function getPokemonPage(limit, offset) {
    const response = await fetch(`${getBaseUrl()}?limit=${limit}&offset=${offset}`);

    if (!response.ok) {
        throw new Error('No se pudo obtener el listado de Pokémon');
    }

    return await response.json();
}