

const activeImages = (imagenes, imagenActiva,imagenMain) =>{
  for(let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('mouseover', function(){
      if(imagenActiva.length < 0){
        imagenActiva[0].classList.remove('active')
      }
      this.classList.add('active')
      imagenMain.src = this.src
    })
  }
}

const slideImages = (slider, btnLeft, btnRight) =>{

  btnLeft.addEventListener('click', () =>{
    slider.scrollLeft -= 120
  })

  btnRight.addEventListener('click', ()=>{
    slider.scrollLeft += 120
  })
}

export {
  activeImages,
  slideImages
}