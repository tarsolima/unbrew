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

function initDropdown() {

    const dropdown = document.querySelectorAll('[data-dropdown]');

    dropdown.forEach((itens) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            itens.addEventListener(userEvent, handleDropDown);
        });
    });


    function handleDropDown(itens) {
        itens.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'] ,() => {
            this.classList.remove('active');
        })
    }

    function outsideClick(element, events ,callback) {
        const html = document.documentElement;
        const outside = 'data-outside';
        if(!element.hasAttribute(outside)) {
            events.forEach((userEvent) => {
                html.addEventListener(userEvent, handleOutside);
            });
            element.setAttribute(outside, '');
        }

        function handleOutside(event) {
            if(!element.contains(event.target)) {
                element.removeAttribute(outside);
                events.forEach((userEvent) => {
                    html.removeEventListener(userEvent, handleOutside);
                });
                callback();
            }
        }
    }
}

initDropdown();

const openModal = document.querySelector('[data-abrir="modal"]');
const closedModal = document.querySelector('[data-modal="fechar"]');
const modalContainer = document.querySelector('[data-container]');


function startModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('active');
}

function eventContainer(event) {
    event.preventDefault();
    if(event.target === this) {
        startModal(event);
    }
}

openModal.addEventListener('click', startModal);
closedModal.addEventListener('click', startModal);
modalContainer.addEventListener('click', eventContainer);