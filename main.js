const boton = document.getElementById('button')
const menu = document.querySelector('.menu-container')

boton.addEventListener('click', showMenu)

function showMenu(){
    menu.classList.toggle('show-menu')
    if(boton){
        boton.classList.add('hide-button')
    }
}