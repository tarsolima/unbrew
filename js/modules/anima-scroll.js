export default class AnimaScroll {
  constructor(scrollSart) {
    this.scrollStart = document.querySelectorAll(scrollSart);
    this.windowMetade = window.innerHeight * 0.7;

    this.scroller = this.scroller.bind(this);
  }

  scroller() {
    this.scrollStart.forEach((itens) => {
      const scrollTop = itens.getBoundingClientRect().top;
      const conta = (scrollTop - this.windowMetade) < 0;

      if (conta) {
        itens.classList.add('active');
      }
    });
  }

  addEvent() {
    this.scroller();
    window.addEventListener('scroll', this.scroller);
  }

  init() {
    if (this.scrollStart.length) {
      this.addEvent();
    }
    return this;
  }
}
