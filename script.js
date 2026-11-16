
const barras = document.querySelectorAll(".progress-bar");

const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.style.width =
                entrada.target.dataset.width;

            observer.unobserve(entrada.target);
        }
    });
}, { threshold: 0.3 });

barras.forEach((barra) => {
    observador.observe(barra);
});
