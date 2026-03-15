let pokemonCardTemplate = null;

// Loads the card template from the component file
// and stores it for later card creation.
export async function loadPokemonCardTemplate() {
    const container = document.getElementById('pokemonCardTemplateContainer');

    if (!container) {
        throw new Error('No se encontró el contenedor del template de cards');
    }

    const response = await fetch('../components/pokemon-card/pokemon-card.html');

    if (!response.ok) {
        throw new Error('No se pudo cargar el componente pokemon-card');
    }

    const templateHtml = await response.text();
    container.innerHTML = templateHtml;

    pokemonCardTemplate = document.getElementById('pokemonCardTemplate');

    if (!pokemonCardTemplate) {
        throw new Error('No se encontró el template pokemonCardTemplate');
    }
}

export function createPokemonCard(pokemon, onDetailClick) {
    if (!pokemonCardTemplate) {
        throw new Error('El template de pokemon-card no está cargado');
    }

    const cardElement = pokemonCardTemplate.content.firstElementChild.cloneNode(true);

    const imageElement = cardElement.querySelector('.pokemon-card__image');
    const nameElement = cardElement.querySelector('.pokemon-card__name');
    const idElement = cardElement.querySelector('.pokemon-card__id');
    const typeElement = cardElement.querySelector('.pokemon-card__type');
    const detailButton = cardElement.querySelector('.pokemon-card__button');

    imageElement.src = pokemon.image;
    imageElement.alt = pokemon.name;

    nameElement.textContent = pokemon.name;
    idElement.textContent = `ID: ${pokemon.id}`;
    typeElement.textContent = `Tipo: ${pokemon.types.join(', ')}`;

    if (typeof onDetailClick === 'function') {
        detailButton.addEventListener('click', () => onDetailClick(pokemon));
    }

    return cardElement;
}

// Clears the container and renders each pokemon card,
// or shows an empty state when there is no data.
export function renderPokemonCards(container, pokemons, onDetailClick) {
    if (!container) {
        throw new Error('No se encontró el contenedor de cards');
    }

    container.innerHTML = '';

    if (!Array.isArray(pokemons) || pokemons.length === 0) {
        container.innerHTML = `
            <div class="pokemon-list-empty">
                No hay Pokémon disponibles para mostrar.
            </div>
        `;
        return;
    }

    pokemons.forEach((pokemon) => {
        const cardElement = createPokemonCard(pokemon, onDetailClick);
        container.appendChild(cardElement);
    });
}