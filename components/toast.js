export async function loadToast() {
    const container = document.getElementById('toastContainer');

    if (!container) {
        throw new Error('No se encontró el contenedor del toast');
    }

    const response = await fetch('../components/toast.html');
    const toastHtml = await response.text();

    container.innerHTML = toastHtml;

    const closeButton = document.getElementById('toastClose');
    const toast = document.getElementById('toast');

    closeButton.addEventListener('click', () => {
        toast.classList.remove('show');
    });
}

export function showToast({ type = 'error', title = '', message = '' }) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');

    if (!toast || !toastTitle || !toastMessage) {
        return;
    }

    toast.className = `toast ${type}`;
    toastTitle.textContent = title;
    toastMessage.textContent = message;

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}