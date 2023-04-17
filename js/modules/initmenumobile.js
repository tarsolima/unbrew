import outsideClick from './outside.js';

export default function initMenuMobile() {
  const menuMobile = document.querySelector('[data-mobile="click"]');
  const menuList = document.querySelector('[data-mobile="list"]');

  function startMobile() {
    menuMobile.classList.add('active');
    menuList.classList.add('active');
    outsideClick(menuList, ['touchstart', 'click'], () => {
      menuMobile.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  ['touchstart', 'click'].forEach((userEvent) => menuMobile.addEventListener(userEvent, startMobile));
}
