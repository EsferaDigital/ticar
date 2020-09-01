
require('../scss/styles.scss')

import {toggleNav, scrollNav} from './nav/nav'
import{selectDay} from './elementos/programas'
import {firstSlider, secondSlider} from './elementos/sliders'
import {printModal} from './elementos/modal'
import { openCh, modalCh, closeCh, openMa, modalMa, closeMa, openBa, modalBa, closeBa, openTe, modalTe, closeTe, openDo, modalDo, closeDo, openDa, modalDa, closeDa } from './dom/var-actions'

toggleNav()
scrollNav()
selectDay()
firstSlider()
secondSlider()
printModal(openCh,modalCh,closeCh)
printModal(openMa,modalMa,closeMa)
printModal(openBa,modalBa,closeBa)
printModal(openTe,modalTe,closeTe)
printModal(openDo,modalDo,closeDo)
printModal(openDa,modalDa,closeDa)

