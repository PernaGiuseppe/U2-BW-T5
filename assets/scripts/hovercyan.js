// Tramite questo codice la classe "cyan-items", all'hover e al click gli items diventano epi-cyan ***************

document.querySelectorAll('.cyan-items').forEach((element) => {
  element.addEventListener('mouseenter', function () {
    const icon = this.querySelector('i')
    if (!icon.classList.contains('text-epi-cyan')) {
      icon.classList.remove('text-white-50')
      icon.classList.add('text-epi-cyan')
    }
  })

  element.addEventListener('mouseleave', function () {
    const icon = this.querySelector('i')
    if (!this.hasAttribute('data-active')) {
      icon.classList.remove('text-epi-cyan')
      icon.classList.add('text-white-50')
    }
  })

  element.addEventListener('click', function () {
    const icon = this.querySelector('i')
    if (this.hasAttribute('data-active')) {
      this.removeAttribute('data-active')
      icon.classList.remove('text-epi-cyan')
      icon.classList.add('text-white-50')
    } else {
      this.setAttribute('data-active', 'true')
      icon.classList.remove('text-white-50')
      icon.classList.add('text-epi-cyan')
    }
  })
})
