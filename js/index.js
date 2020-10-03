
const alturaPantalla = window.innerHeight;

eventListeners();

function eventListeners() {
    window.addEventListener('scroll', mostrarProyectos);
    window.addEventListener('scroll', mostrarTecnologias);
    window.addEventListener('scroll', mostrarInformacion);
}

function mostrarProyectos() {
    const contenedorProyectos = document.querySelector('.portafolio');
    const proyectos = document.querySelector('.portafolio__proyectos');
    efectoFadeIn(contenedorProyectos,proyectos);
}

function mostrarTecnologias() {
    const conetedorTecnologias = document.querySelector('.tecnologias');
    const tecnologias = document.querySelector('.tecnologias__items');
    efectoFadeIn(conetedorTecnologias,tecnologias)
}

function mostrarInformacion() {
    const contenedorInformacion = document.querySelector('.sobreMi');
    const informacion = document.querySelector('.sobreMi__tarjetas');
    efectoFadeIn(contenedorInformacion,informacion)
}


function efectoFadeIn(contenedorElemento,elemento) {
    const posicionContenedor = contenedorElemento.getBoundingClientRect().top;
    if(posicionContenedor + 120 < alturaPantalla){
        elemento.classList.remove('hideElement');
        elemento.classList.add('animate__fadeIn');
    }
}