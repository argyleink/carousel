visibleScrollbar.oninput = () => {
  const value = new FormData(carouselConfiguration).get('scrollbar')
  const scroller = customCarousel.querySelector(':scope > .grid-flow---scroller')

  function mutate() {
    scroller.classList.toggle('scrollbar-visible', value === 'true')
    scrollbarOutput.textContent = value === 'true' ? 'scrollbar-width: thin;' : 'scrollbar-width: none;'
  }

  document.startViewTransition 
    ? document.startViewTransition(() => mutate())
    : mutate()
}