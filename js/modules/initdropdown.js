import outsideClick from './outside.js';

export default function initDropdown() {
  const dropdown = document.querySelectorAll('[data-dropdown]');

  function handleDropDown(itens) {
    itens.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => this.classList.remove('active'));
  }

  dropdown.forEach((itens) => {
    ['touchstart', 'click'].forEach((userEvent) => itens.addEventListener(userEvent, handleDropDown));
  });
}
