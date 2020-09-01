
const printModal = (open,modal,close) =>{
  open.addEventListener('click', () =>{
    modal.classList.toggle('zoomin')
    modal.classList.remove('zoomout')
  })
  close.addEventListener('click', () =>{
    modal.classList.replace('zoomin', 'zoomout')
  })
}

export {
  printModal
}