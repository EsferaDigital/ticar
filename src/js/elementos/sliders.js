
const firstSlider = () =>{
  window.addEventListener("load",() =>{
  let lista = document.querySelector(".slider-lista");
  new Glider(lista, {
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    dots: '.slider-indicadores',
    arrows: {
      prev: '.anterior',
      next: '.siguiente'
    },
    responsive: [
      {
        //Desde 768px
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });
})}

const secondSlider = () =>{
  window.addEventListener("load",() =>{
  let lista = document.querySelector(".slider2-lista");
  new Glider(lista, {
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    dots: '.slider2-indicadores',
    arrows: {
      prev: '.anterior2',
      next: '.siguiente2'
    },
    responsive: [
      {
        //Desde 768px
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });
})}

export {
  firstSlider,
  secondSlider
}