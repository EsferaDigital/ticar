
require('../scss/styles.scss')

import {toggleNav, scrollNav} from './nav/nav'
import{selectDay} from './elementos/programas'
import {printModal} from './elementos/modal'
import { openCh, modalCh, closeCh, openMa, modalMa, closeMa, openBa, modalBa, closeBa, openTe, modalTe, closeTe, openDo, openDi, modalDo, modalDi, closeDo, closeDi, openDa, modalDa, closeDa, imagenes, imagenActiva, imagenMain, imagenes2, imagenActiva2, imagenMain2, slider, btnLeft2, btnLeft, btnRight, slider2, btnRight2 } from './dom/var-actions'
import { activeImages, slideImages } from './elementos/sliders'

toggleNav()
scrollNav()
selectDay()
activeImages(imagenes, imagenActiva, imagenMain)
activeImages(imagenes2, imagenActiva2, imagenMain2)
slideImages(slider, btnLeft, btnRight)
slideImages(slider2, btnLeft2, btnRight2)
printModal(openCh,modalCh,closeCh)
printModal(openMa,modalMa,closeMa)
printModal(openBa,modalBa,closeBa)
printModal(openTe,modalTe,closeTe)
printModal(openDo,modalDo,closeDo)
printModal(openDa,modalDa,closeDa)
printModal(openDi,modalDi,closeDi)

