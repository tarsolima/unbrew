export default function initscroll() {
  const scrollStart = document.querySelectorAll('[data-scroll]');
  const windowMetade = window.innerHeight * 0.7;

  function scroller() {
    scrollStart.forEach((itens) => {
      const scrollTop = itens.getBoundingClientRect().top;
      const conta = (scrollTop - windowMetade) < 0;

      if (conta) {
        itens.classList.add('active');
      }
    });
  }

  scroller();

  window.addEventListener('scroll', scroller);
}
