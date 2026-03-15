import { loadHeader } from '../../components/header/header.js';
import { loadToast, showToast } from '../../components/toast/toast.js';
import { loadPokemonModal, openPokemonModal, setPokemonModalData } from '../../components/modal/pokemon-modal.js';
import { loadPokemonCardTemplate, renderPokemonCards } from '../../components/pokemon-card/pokemon-card.js';
import { getPokemonList } from '../services/get-pokemon-list.service.js';
import { getPokemon } from '../services/get-pokemon.service.js';
import { getPokemonEvolution } from '../services/get-pokemon-evolution.service.js';

const pokemonCardsContainer = document.getElementById('pokemonCardsContainer');
const pokemonListMeta = document.getElementById('pokemonListMeta');
const previousPageButton = document.getElementById('previousPageButton');
const nextPageButton = document.getElementById('nextPageButton');
const currentPageIndicator = document.getElementById('currentPageIndicator');

const PAGE_SIZE = 32;
let currentPage = 1;
let totalPages = 1;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await loadHeader();
        await loadToast();
        await loadPokemonModal();
        await loadPokemonCardTemplate();
        await renderPage();
    } catch (error) {
        showToast({
            type: 'error',
            title: 'Error de carga',
            message: error.message
        });
    }
});

previousPageButton.addEventListener('click', async () => {
    if (currentPage === 1) {
        return;
    }

    currentPage -= 1;
    await renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

nextPageButton.addEventListener('click', async () => {
    if (currentPage === totalPages) {
        return;
    }

    currentPage += 1;
    await renderPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

async function renderPage() {
    try {
        pokemonListMeta.textContent = 'Cargando Pokémon...';

        const listData = await getPokemonList(currentPage, PAGE_SIZE);

        totalPages = Math.ceil(listData.count / PAGE_SIZE);

        const start = (currentPage - 1) * PAGE_SIZE + 1;
        const end = Math.min(currentPage * PAGE_SIZE, listData.count);

        pokemonListMeta.textContent = `Mostrando del Pokémon ${start} al ${end}`;
        currentPageIndicator.textContent = `Página ${currentPage}`;

        renderPaginationButtons();

        renderPokemonCards(pokemonCardsContainer, listData.pokemons, handlePokemonDetail);
    } catch (error) {
        pokemonListMeta.textContent = 'No se pudo cargar el listado';
        renderPokemonCards(pokemonCardsContainer, [], null);

        showToast({
            type: 'error',
            title: 'Error al cargar',
            message: error.message
        });
    }
}

function renderPaginationButtons() {
    if (currentPage === 1) {
        previousPageButton.classList.add('hidden');
    } else {
        previousPageButton.classList.remove('hidden');
    }

    if (currentPage === totalPages) {
        nextPageButton.classList.add('hidden');
    } else {
        nextPageButton.classList.remove('hidden');
    }
}

async function handlePokemonDetail(pokemonCardData) {
    try {
        const pokemon = await getPokemon(pokemonCardData.name);
        const evolutionData = await getPokemonEvolution(pokemonCardData.name);

        setPokemonModalData({
            pokemon,
            evolutions: evolutionData.evolutions
        });

        openPokemonModal();
    } catch (error) {
        showToast({
            type: 'error',
            title: 'Error al abrir detalle',
            message: error.message
        });
    }
}