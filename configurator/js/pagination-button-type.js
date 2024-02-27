paginationButtonType.oninput = () => {
  const value = new FormData(carouselConfiguration).get('paginationType')

  function mutate() {
    let type

    switch(value) {
      case 'dots':
        type = '"•"'
        break
      case 'numbers':
        type = 'counter(carousel)'
        break
      case 'images':
        type = 'attr(src)'
        break
    }

    markersOutput.textContent = value === 'numbers'
      ? `&::scroll-marker {
    content: ${type};
    counter-increment: carousel;
  }`
      : `&::scroll-markers { content: ${type} }`
    markersCounter.style.display = value === 'numbers' ? null : 'none'

    customCarousel.classList.toggle('--pagination-numbers', value === 'numbers')
  }

  document.startViewTransition 
    ? document.startViewTransition(() => mutate())
    : mutate()
}