import {update} from '../../polyfill/polyfill.js'

const types = {
  page: '&::fragment',
  item: '> li',
}

markerSnapBy.oninput = () => {
  const value = new FormData(carouselConfiguration).get('markerSnapType')

  function mutate() {
    markersNavigateBy.textContent = types[value]
    customCarousel.classList.toggle('--pagination-items', value === 'item')
    update()
  }

  document.startViewTransition 
    ? document.startViewTransition(() => mutate())
    : mutate()
}