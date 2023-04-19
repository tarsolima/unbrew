import initScroll from './modules/initscroll.js';
import initNumber from './modules/initnumber.js';
import Modal from './modules/modal.js';
import initDropdown from './modules/initdropdown.js';
import initMenuMobile from './modules/initmenumobile.js';

const modal = new Modal('[data-abrir="modal"]', '[data-modal="fechar"]', '[data-container]');
modal.init();

initScroll();
initNumber();
initDropdown();
initMenuMobile();
