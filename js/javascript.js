import AnimaScroll from './modules/anima-scroll.js';
import Numeros from './modules/number.js';
import Modal from './modules/modal.js';
import Dropdown from './modules/dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import ScrollSuave from './modules/scroll-suave.js';
import SlideNav from './modules/slide.js';

const modal = new Modal('[data-abrir="modal"]', '[data-modal="fechar"]', '[data-container]');
modal.init();

const dropdown = new Dropdown('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile('[data-mobile="click"]', '[data-mobile="list"]');
menuMobile.init();

const scroll = new AnimaScroll('[data-scroll]');
scroll.init();

const numeros = new Numeros('[data-numero]', '.fundo-services', 'active');
numeros.init();

const scrollSuave = new ScrollSuave('[data-link] a[href^="#"]');
scrollSuave.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
// slide.addControl('.custom-controls');
