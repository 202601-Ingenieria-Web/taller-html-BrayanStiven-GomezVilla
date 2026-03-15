export async function loadHeader() {
    const container = document.getElementById('headerContainer');

    if (!container) {
        throw new Error('No se encontró el contenedor del header');
    }

    const response = await fetch('../components/header/header.html');

    if (!response.ok) {
        throw new Error('No se pudo cargar el componente header');
    }

    const headerHtml = await response.text();
    container.innerHTML = headerHtml;

    const headerToggle = document.getElementById('headerToggle');
    const headerNav = document.getElementById('headerNav');

    if (headerToggle && headerNav) {
        headerToggle.addEventListener('click', () => {
            headerNav.classList.toggle('is-open');
        });
    }
}