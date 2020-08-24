// Archivo para funciones de navegación

import {smoothScroll, Up} from '../helpers/nav-functions'

const toggleNav = () =>{
  const d = document,
  panel = d.querySelector('.Panel'),
  panelBtn = d.querySelector('.Panel-btn')

  panelBtn.addEventListener('click', e => {
    e.preventDefault()
    panelBtn.classList.toggle('is-active')
    panel.classList.toggle('is-active')
  })
}

const scrollNav = () =>{
  const d = document,
  panel = d.querySelector('.Panel'),
  panelBtn = d.querySelector('.Panel-btn')
  const itemLinks = d.querySelectorAll(".Menu-link")

  itemLinks.forEach(elem => elem.addEventListener('click', navBarClick))

  function navBarClick(e){
    smoothScroll(e);
    panelBtn.classList.toggle('is-active')
    panel.classList.toggle('is-active')
  }
}

export {
  toggleNav,
  scrollNav
}