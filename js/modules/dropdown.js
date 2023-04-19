import outsideClick from './outside.js';

export default class Dropdown {
  constructor(dropdown, element) {
    this.dropdown = document.querySelectorAll(dropdown);
    if (this.element === undefined) this.element = ['touchstart', 'click'];
    else this.element = element;
    this.activeClass = 'active';
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(itens) {
    itens.preventDefault();
    const event = itens.currentTarget;
    event.classList.add(this.activeClass);
    outsideClick(event, this.element, () => event.classList.remove(this.activeClass));
  }

  addEvent() {
    this.dropdown.forEach((itens) => {
      this.element.forEach((userEvent) => itens.addEventListener(userEvent, this.handleDropDown));
    });
  }

  init() {
    if (this.dropdown.length) {
      this.addEvent();
    }
    return this;
  }
}
