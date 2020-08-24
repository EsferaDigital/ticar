
function easeInOutCubic(t,b,c,d){
  t /= d/2
  if(t < 1) return c/2*t*t*t + b
  t -= 2
  return c/2*(t*t*t + 2) + b
}

function easeInOut(t,b,c,d){
  t /= d/2
  if(t < 1 ) return c/2*t*t + b
  t--
  return -c/2 * (t*(t-2) - 1) + b
}

function smoothScroll(e){
  e.preventDefault()
  const targetId = e.currentTarget.getAttribute("href")
  const targetPosition = document.querySelector(targetId).offsetTop - 112;
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition //- 80
  const duration = 1000
  let start = null

  window.requestAnimationFrame(step)
  function step(timestamp){
    if(!start) start = timestamp
    const progress = timestamp - start
    window.scrollTo(0, easeInOut(progress, startPosition, distance, duration))
    if(progress < duration) window.requestAnimationFrame(step)
  }
}

const Up = () =>{
  const targetPosition = 0
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = 750
  let start = null

  window.requestAnimationFrame(step)

  function step(timestamp){
    if(!start) start = timestamp
    const progress = timestamp -start
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration))
    if(progress < duration) window.requestAnimationFrame(step)
  }
}

export {
  smoothScroll,
  Up
}