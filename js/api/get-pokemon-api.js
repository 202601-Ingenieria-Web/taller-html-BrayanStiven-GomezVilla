//import the base URL function
import { getBaseUrl } from '../utils/get-base.url.js';

export async function getPokemonByName(name) {
    const response = await fetch(getBaseUrl() + name.toLowerCase());

    if (!response.ok) {
        throw new Error('Pokémon no encontrado');
    }

    return await response.json();
}