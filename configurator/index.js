import '../polyfill/polyfill.js'

navigationButtons.oninput = () => {
  const value = new FormData(carouselConfiguration).get('buttons')
  const buttons = customCarousel.querySelectorAll(':scope > button')

  function mutate() {
    buttons.forEach(button => {
      button.style.display = value === 'true' ? null : 'none'
    })

    buttonsOutput.textContent = value === 'false' ? `` : `&::scroll-left-button  { content: '<' }
    &::scroll-right-button { content: '>' }`
  }

  if (document.startViewTransition)
    document.startViewTransition(() => mutate())
  else
    mutate()
}

paginationButtons.oninput = () => {
  const value = new FormData(carouselConfiguration).get('pagination')
  const markers = customCarousel.querySelector(':scope > .grid-flow---markers')

  function mutate() {
    markers.style.display = value === 'true' ? null : 'none'
    markersOutput.textContent = value === 'true' ? '&::scroll-markers { content: " " }' : ''
  }

  if (document.startViewTransition)
    document.startViewTransition(() => mutate())
  else
    mutate()
}

visibleScrollbar.oninput = () => {
  const value = new FormData(carouselConfiguration).get('scrollbar')
  const scroller = customCarousel.querySelector(':scope > .grid-flow---scroller')

  function mutate() {
    scroller.classList.toggle('scrollbar-visible', value === 'true')
    scrollbarOutput.textContent = value === 'true' ? 'scrollbar-width: thin;' : 'scrollbar-width: none;'
  }

  if (document.startViewTransition)
    document.startViewTransition(() => mutate())
  else
    mutate()
}