import '../polyfill/polyfill.js'

navigationButtons.oninput = () => {
  const value = new FormData(carouselConfiguration).get('buttons')
  const buttons = customCarousel.querySelectorAll(':scope > button')

  buttons.forEach(button => {
    button.style.display = value === 'true' ? null : 'none'
  })
}

paginationButtons.oninput = () => {
  const value = new FormData(carouselConfiguration).get('pagination')
  const markers = customCarousel.querySelector(':scope > .grid-flow---markers')

  markers.style.display = value === 'true' ? null : 'none'
}

visibleScrollbar.oninput = () => {
  const value = new FormData(carouselConfiguration).get('scrollbar')

  customCarousel
    .querySelector('.grid-flow---scroller')
    .classList.toggle('scrollbar-visible', value === 'true')
}