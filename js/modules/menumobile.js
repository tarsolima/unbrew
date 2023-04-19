import outsideClick from './outside.js';

export default class MenuMobile {
  constructor(menuMobile, menuList, element) {
    this.menuMobile = document.querySelector(menuMobile);
    this.menuList = document.querySelector(menuList);

    if (this.element === undefined) this.element = ['touchstart', 'click'];
    else this.element = element;
    this.activeClass = 'active';
    this.startMobile = this.startMobile.bind(this);
  }

  startMobile(event) {
    event.preventDefault();
    this.menuMobile.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.element, () => {
      this.menuMobile.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addEvent() {
    ['touchstart', 'click'].forEach((userEvent) => {
      this.menuMobile.addEventListener(userEvent, this.startMobile);
    });
  }

  init() {
    if (this.menuMobile && this.menuList) {
      this.addEvent();
    }
    return this;
  }
}
