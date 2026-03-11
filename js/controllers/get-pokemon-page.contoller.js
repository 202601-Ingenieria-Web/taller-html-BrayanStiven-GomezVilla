import { getPokemon } from '../services/get-pokemon.service.js';

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

const resultsContainer = document.getElementById('resultsContainer');
const pokemonName = document.getElementById('pokemonName');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonType = document.getElementById('pokemonType');
const pokemonId = document.getElementById('pokemonId');
const pokemonHeight = document.getElementById('pokemonHeight');
const pokemonSkills = document.getElementById('pokemonSkills');

searchButton.addEventListener('click', async () => {
    try {
        const pokemon = await getPokemon(searchInput.value);
        pokemonName.textContent = pokemon.name;
        pokemonImage.src = pokemon.image;
        pokemonType.textContent = pokemon.type;
        pokemonId.textContent = `ID: ${pokemon.id}`;
        pokemonHeight.textContent = `Altura: ${pokemon.height}`;
        pokemonSkills.textContent = `Habilidades: ${pokemon.skills}`;
        resultsContainer.style.display = 'block';
        document.querySelector('.results-container').classList.add('show');
    } catch (error) {
        alert(error.message);
        document.querySelector('.results-container').classList.add('hidden');
    }
});