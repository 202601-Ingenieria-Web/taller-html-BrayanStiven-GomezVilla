import { getPokemon } from '../services/get-pokemon.service.js';
import { loadToast, showToast } from '../../components/toast.js';

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const pokemonName = document.getElementById('pokemonName');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonType = document.getElementById('pokemonType');
const pokemonId = document.getElementById('pokemonId');
const pokemonHeight = document.getElementById('pokemonHeight');
const pokemonSkills = document.getElementById('pokemonSkills');

document.addEventListener('DOMContentLoaded', async () => {
    await loadToast();
});

searchButton.addEventListener('click', async () => {
    try {
        const pokemon = await getPokemon(searchInput.value);
        pokemonName.textContent = pokemon.name;
        pokemonImage.src = pokemon.image;
        pokemonImage.alt = pokemon.name;
        pokemonType.textContent = pokemon.type;
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
        resultsContainer.classList.remove('show');
        showToast({
            type: 'error',
            title: 'Upss! Ha ocurrido un error',
            message: error.message
        });
    }
});