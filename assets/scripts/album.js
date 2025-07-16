// Bottone per tornare indietro alla home

document.getElementById('back-icon').addEventListener('click', function (e) {
  e.preventDefault()
  window.location.href = 'home.html'
})

// Questo codice rende tutti gli elementi "a,i" all'interno del menu li dell'ul, bianchi all'hover del mouse

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('#menuLaterale li')

  menuItems.forEach((li) => {
    li.addEventListener('mouseenter', function () {
      this.classList.remove('text-secondary')
      this.classList.add('text-light')

      const links = this.querySelectorAll('a')
      const icons = this.querySelectorAll('i')

      links.forEach((link) => {
        link.classList.remove('text-secondary')
        link.classList.add('text-light')
      })

      icons.forEach((icon) => {
        icon.classList.remove('text-secondary')
        icon.classList.add('text-light')
      })
    })

    li.addEventListener('mouseleave', function () {
      this.classList.remove('text-light')
      this.classList.add('text-secondary')

      const links = this.querySelectorAll('a')
      const icons = this.querySelectorAll('i')

      links.forEach((link) => {
        link.classList.remove('text-light')
        link.classList.add('text-secondary')
      })

      icons.forEach((icon) => {
        icon.classList.remove('text-light')
        icon.classList.add('text-secondary')
      })
    })
  })
})

// Tramite questo codice la classe "green-cyan", all'hover e al click gli items diventano epi-cyan

document.querySelectorAll('.cayn-items').forEach((element) => {
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
