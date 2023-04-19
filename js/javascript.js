import initScroll from './modules/initscroll.js';
import initNumber from './modules/initnumber.js';
import Modal from './modules/modal.js';
import Dropdown from './modules/dropdown.js';
import initMenuMobile from './modules/initmenumobile.js';

const modal = new Modal('[data-abrir="modal"]', '[data-modal="fechar"]', '[data-container]');
modal.init();

const dropdown = new Dropdown('[data-dropdown]');
dropdown.init();

initScroll();
initNumber();
initMenuMobile();
