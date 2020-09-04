
const openCh = document.getElementById('openCh')
const openMa = document.getElementById('openMa')
const openBa = document.getElementById('openBa')
const openTe = document.getElementById('openTe')
const openDo = document.getElementById('openDo')
const openDa = document.getElementById('openDa')
const modalCh = document.getElementById('modalCh')
const modalBa = document.getElementById('modalBa')
const closeBa = document.getElementById('closeBa')
const modalMa = document.getElementById('modalMa')
const closeMa = document.getElementById('closeMa')
const modalTe = document.getElementById('modalTe')
const closeTe = document.getElementById('closeTe')
const modalDo = document.getElementById('modalDo')
const closeDo = document.getElementById('closeDo')
const modalDa = document.getElementById('modalDa')
const closeDa = document.getElementById('closeDa')
const closeCh = document.getElementById('closeCh')
const imagenes = Array.prototype.slice.apply(document.getElementsByClassName('thumbnail'))
const imagenActiva = document.getElementsByClassName('active')
const imagenMain = document.getElementById('featured')
const imagenes2 = Array.prototype.slice.apply(document.getElementsByClassName('thumbnail2'))
const imagenActiva2 = document.getElementsByClassName('active2')
const imagenMain2 = document.getElementById('featured2')
const slider = document.getElementById('slider')
const btnRight = document.getElementById('slideRight')
const btnLeft = document.getElementById('slideLeft')
const slider2 = document.getElementById('slider2')
const btnRight2 = document.getElementById('slideRight2')
const btnLeft2 = document.getElementById('slideLeft2')

export {
  openCh,
  openMa,
  openBa,
  openTe,
  openDo,
  openDa,
  modalCh,
  modalBa,
  modalMa,
  modalTe,
  modalDo,
  modalDa,
  closeBa,
  closeCh,
  closeDa,
  closeDo,
  closeMa,
  closeTe,
  imagenActiva,
  imagenActiva2,
  imagenMain,
  imagenMain2,
  imagenes,
  imagenes2,
  slider,
  slider2,
  btnLeft,
  btnLeft2,
  btnRight,
  btnRight2

}