function initscroll() {
    const scrollStart = document.querySelectorAll('[data-scroll]');
    const windowMetade = window.innerHeight * .7;

    if(scrollStart) {
        function scroller() {
            scrollStart.forEach((itens) => {
                const scrollTop = itens.getBoundingClientRect().top;
                const conta = (scrollTop - windowMetade) < 0;

                if(conta) {
                    itens.classList.add('active');
                }
            });
        }

        scroller();

        window.addEventListener('scroll', scroller);
    }
}

initscroll();

function initnumber() {
    const numeros = document.querySelectorAll('[data-numero]');

    function animaNumeros() {
        numeros.forEach((itens) => {
            const total = +itens.innerText;
            const incremento = Math.floor(total / 100);
            let start = 0;
            const timer = setInterval(() => {
                start = start + incremento;
                itens.innerText = start;
                if(start > total) {
                    itens.innerText = total
                    clearInterval(timer);
                }
            }, 25 * Math.random())
        });
    }

    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('active')) {
            observer.disconnect();
            animaNumeros()
        }
    }

    const observerTarget = document.querySelector('.fundo-services');
    const observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, {attributes: true});
}

initnumber();


const dropdown = document.querySelectorAll('[data-dropdown]');

dropdown.forEach((itens) => {
    ['touchstart', 'click'].forEach((userEvent) => {
        itens.addEventListener(userEvent, handleDropDown);
    });
});


function handleDropDown(itens) {
    itens.preventDefault();
    this.classList.toggle('active');
}