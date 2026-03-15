import { getPokemon } from '../services/get-pokemon.service.js';
import { getPokemonEvolution } from '../services/get-pokemon-evolution.service.js';
import { loadToast, showToast } from '../../components/toast/toast.js';
import { loadPokemonModal, openPokemonModal, setPokemonModalData } from '../../components/modal/pokemon-modal.js';
import { loadHeader } from '../../components/header/header.js';

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const pokemonName = document.getElementById('pokemonName');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonType = document.getElementById('pokemonType');
const pokemonId = document.getElementById('pokemonId');
const pokemonHeight = document.getElementById('pokemonHeight');
const pokemonSkills = document.getElementById('pokemonSkills');
const openPokemonModalButton = document.getElementById('openPokemonModalButton');

let currentPokemon = null;

document.addEventListener('DOMContentLoaded', async () => {
    await loadHeader();
    await loadToast();
    await loadPokemonModal();
});

// Searches the pokemon by name and updates
// the result section with the fetched data.
async function searchPokemon() {
    try {
        const pokemon = await getPokemon(searchInput.value);
        currentPokemon = pokemon;

        pokemonName.textContent = pokemon.name;
        pokemonImage.src = pokemon.image;
        pokemonImage.alt = pokemon.name;
        pokemonType.textContent = pokemon.types.join(', ');
        pokemonId.textContent = `ID: ${pokemon.id}`;
        pokemonHeight.textContent = `Altura: ${pokemon.height}`;
        pokemonSkills.textContent = `Habilidades: ${pokemon.skills}`;

        resultsContainer.classList.add('show');

        showToast({
            type: 'success',
            title: '¡Encontrado!',
            message: 'Pokémon encontrado exitosamente.'
        });
    } catch (error) {
        currentPokemon = null;
        resultsContainer.classList.remove('show');

        showToast({
            type: 'error',
            title: 'Upss! Ha ocurrido un error',
            message: error.message
        });
    }
}

searchButton.addEventListener('click', searchPokemon);

searchInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        await searchPokemon();
    }
});

// Loads the evolution data for the current pokemon
// and opens the modal with the complete detail view.
openPokemonModalButton.addEventListener('click', async () => {
    try {
        if (!currentPokemon) {
            throw new Error('Primero debes buscar un Pokémon');
        }

        const evolutionData = await getPokemonEvolution(currentPokemon.name);

        setPokemonModalData({
            pokemon: currentPokemon,
            evolutions: evolutionData.evolutions
        });

        openPokemonModal();
    } catch (error) {
        showToast({
            type: 'error',
            title: 'No se pudo abrir el modal',
            message: error.message
        });
    }
});