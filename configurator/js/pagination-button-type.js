paginationButtonType.oninput = () => {
  const value = new FormData(carouselConfiguration).get('paginationType')

  function mutate() {
    let type

    switch(value) {
      case 'dots':
        type = '"•"'
        break
      case 'numbers':
        type = 'counter(section)'
        break
      case 'images':
        type = 'attr(src)'
        break
    }

    markersOutput.textContent = `&::scroll-markers { content: ${type} }`
    markersCounter.style.display = value === 'numbers' ? null : 'none'
  }

  document.startViewTransition 
    ? document.startViewTransition(() => mutate())
    : mutate()
}