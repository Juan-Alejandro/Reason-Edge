const botonMenu = document.querySelector('.header-icono-menu');
const menuLista = document.querySelector('.sub-header-container ol');
botonMenu.addEventListener('click', () => {
        menuLista.classList.toggle('activo');
    });