// Loads the modal template into the page
// and connects the close actions for the overlay and button.
export async function loadPokemonModal() {
    const container = document.getElementById('pokemonModalContainer');

    if (!container) {
        throw new Error('No se encontró el contenedor del modal');
    }

    const response = await fetch('../components/modal/pokemon-modal.html');

    if (!response.ok) {
        throw new Error('No se pudo cargar el componente modal');
    }

    const modalHtml = await response.text();
    container.innerHTML = modalHtml;

    const overlay = document.getElementById('pokemonModalOverlay');
    const closeButton = document.getElementById('pokemonModalCloseButton');

    closeButton.addEventListener('click', closePokemonModal);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closePokemonModal();
        }
    });
}

export function openPokemonModal() {
    const overlay = document.getElementById('pokemonModalOverlay');

    if (!overlay) {
        return;
    }

    overlay.classList.add('show');
    document.body.classList.add('modal-open');
}

export function closePokemonModal() {
    const overlay = document.getElementById('pokemonModalOverlay');

    if (!overlay) {
        return;
    }

    overlay.classList.remove('show');
    document.body.classList.remove('modal-open');
}

// Fills the modal sections with the selected pokemon data
// and renders the evolution cards from the provided list.
export function setPokemonModalData({ pokemon, evolutions }) {
    const titleElement = document.getElementById('pokemonModalTitle');
    const detailElement = document.getElementById('pokemonModalContent');
    const evolutionElement = document.getElementById('pokemonEvolutionContent');

    if (!titleElement || !detailElement || !evolutionElement) {
        return;
    }

    titleElement.textContent = `Detalle de ${pokemon.name}`;

    detailElement.innerHTML = `
        <div class="pokemon-modal-detail">
            <img
                src="${pokemon.image}"
                alt="${pokemon.name}"
                class="pokemon-modal-detail__image"
            >
            <div class="pokemon-modal-detail__info">
                <p><strong>Nombre:</strong> ${pokemon.name}</p>
                <p><strong>ID:</strong> ${pokemon.id}</p>
                <p><strong>Tipos:</strong> ${pokemon.types.join(', ')}</p>
                <p><strong>Altura:</strong> ${pokemon.height}</p>
                <p><strong>Habilidades:</strong> ${pokemon.skills}</p>
            </div>
        </div>
    `;

    evolutionElement.innerHTML = `
        <div class="pokemon-modal-evolutions">
            ${evolutions.map((evolution) => `
                <article class="pokemon-modal-evolution-card">
                    <img
                        src="${evolution.image}"
                        alt="${evolution.name}"
                        class="pokemon-modal-evolution-card__image"
                    >
                    <p class="pokemon-modal-evolution-card__name">${evolution.name}</p>
                </article>
            `).join('')}
        </div>
    `;
}