


const selectDay = () =>{
  // Transformamos el Node List en Array
  let dias = Array.prototype.slice.apply(document.querySelectorAll('.dia-titulo'))
  let programas = Array.prototype.slice.apply(document.querySelectorAll('.programa'))

    // Delegación de eventos
  document.getElementById('dias').addEventListener('click', e =>{
    if(e.target.classList.contains('dia-titulo')){
      let i = dias.indexOf(e.target)
      // Quitamos la clase activo a todos los dias
      dias.map(dia => dia.classList.remove('activo'))
      // añade la clase activo al dia selecccionado
      dias[i].classList.add('activo')
      // Quitamos la clase activo a todos los programas
      programas.map(programa => programa.classList.remove('activo'))
      // añade la clase activo al programa selecccionado
      programas[i].classList.add('activo')
    }
  })

}

export {
  selectDay
}