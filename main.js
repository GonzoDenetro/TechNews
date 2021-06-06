const boton = document.getElementById('button')
const menu = document.querySelector('.menu-container')
const cerrar = document.getElementById('close')

boton.addEventListener('click', showMenu)
cerrar.addEventListener('click', closeMenu)

function showMenu(){
    menu.classList.toggle('show-menu')
    if(boton){
        cerrar.classList.add('show-close-icon')
        boton.classList.add('hide-button')
    }
}

function closeMenu(){
    menu.classList.remove('show-menu')
    if(cerrar){
        boton.classList.remove('hide-button')
    }
}

ScrollReveal().reveal('.header-container', {delay: 250})
ScrollReveal().reveal('.hero-section', {delay: 500})
ScrollReveal().reveal('.news-cards-section', {delay: 450})
ScrollReveal().reveal('.baner-section', {delay: 450})
ScrollReveal().reveal('.baner-section-2', {delay: 450})
ScrollReveal().reveal('.social-section', {delay: 350})