import AnimaScroll from './modules/anima-scroll.js';
import initNumber from './modules/initnumber.js';
import Modal from './modules/modal.js';
import Dropdown from './modules/dropdown.js';
import MenuMobile from './modules/menu-mobile.js';

const modal = new Modal('[data-abrir="modal"]', '[data-modal="fechar"]', '[data-container]');
modal.init();

const dropdown = new Dropdown('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile('[data-mobile="click"]', '[data-mobile="list"]');
menuMobile.init();

const scroll = new AnimaScroll('[data-scroll]');
scroll.init();

initNumber();
