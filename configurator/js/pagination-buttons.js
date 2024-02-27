paginationButtons.oninput = () => {
  const value = new FormData(carouselConfiguration).get('pagination')
  const markers = customCarousel.querySelector(':scope > .grid-flow---markers')

  function mutate() {
    markers.style.display = value === 'true' ? null : 'none'
    markersOutput.style.display = value === 'true' ? null : 'none'
  }

  document.startViewTransition 
    ? document.startViewTransition(() => mutate())
    : mutate()
}