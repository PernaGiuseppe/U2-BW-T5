// Tramite questo codice la classe "hovericos", all'hover gli items diventano bianchi

document.querySelectorAll('.hovericos').forEach((element) => {
  element.addEventListener('mouseenter', function () {
    const icon = this.querySelector('i')
    if (icon && !icon.classList.contains('text-light')) {
      icon.classList.remove('text-white-50')
      icon.classList.add('text-light')
    }
  })

  element.addEventListener('mouseleave', function () {
    const icon = this.querySelector('i')
    if (icon && !this.hasAttribute('data-active')) {
      icon.classList.remove('text-light')
      icon.classList.add('text-white-50')
    }
  })
})
