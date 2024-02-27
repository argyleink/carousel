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

  document.startViewTransition 
    ? document.startViewTransition(() => mutate())
    : mutate()
}