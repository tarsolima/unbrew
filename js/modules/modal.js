export default class Modal {
  constructor(openModal, closeModal, modalContainer) {
    this.openModal = document.querySelector(openModal);
    this.closedModal = document.querySelector(closeModal);
    this.modalContainer = document.querySelector(modalContainer);

    this.startModal = this.startModal.bind(this);
    this.eventContainer = this.eventContainer.bind(this);
  }

  startModal(event) {
    event.preventDefault();
    this.modalContainer.classList.toggle('active');
  }

  eventContainer(event) {
    event.preventDefault();
    if (event.target === this.modalContainer) {
      this.startModal(event);
    }
  }

  addEvent() {
    this.openModal.addEventListener('click', this.startModal);
    this.closedModal.addEventListener('click', this.startModal);
    this.modalContainer.addEventListener('click', this.eventContainer);
  }

  init() {
    if (this.openModal && this.closedModal && this.eventContainer) {
      this.addEvent();
    }
    return this;
  }
}
