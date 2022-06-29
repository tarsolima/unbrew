export default function initModal() {
    const openModal = document.querySelector('[data-abrir="modal"]');
    const closedModal = document.querySelector('[data-modal="fechar"]');
    const modalContainer = document.querySelector('[data-container]');

    function startModal(event) {
        event.preventDefault();
        modalContainer.classList.toggle('active');
    }
    
    function eventContainer(event) {
        event.preventDefault();
        if(event.target === this) {
            startModal(event);
        }
    }

    openModal.addEventListener('click', startModal);
    closedModal.addEventListener('click', startModal);
    modalContainer.addEventListener('click', eventContainer);
}