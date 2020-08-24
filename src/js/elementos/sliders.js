
const firstSlider = () =>{
  window.addEventListener("load",() =>{
  let lista = document.querySelector(".slider-lista");
  new Glider(lista, {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    dots: '.slider-indicadores',
    arrows: {
      prev: '.anterior',
      next: '.siguiente'
    }
  });
})}

const secondSlider = () =>{
  window.addEventListener("load",() =>{
  let lista = document.querySelector(".slider2-lista");
  new Glider(lista, {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    dots: '.slider2-indicadores',
    arrows: {
      prev: '.anterior2',
      next: '.siguiente2'
    }
  });
})}

export {
  firstSlider,
  secondSlider
}