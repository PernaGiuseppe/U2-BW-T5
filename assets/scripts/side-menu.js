// Questo codice rende tutti gli elementi "a,i" all'interno del menu li dell'ul, bianchi all'hover del mouse

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll(
    '#menuLaterale li:not([data-exclude])'
  )
  // La riga 12 esclude li che deve rimanere "text-light" che indica in che pagina siamo attualmente
  // per es: in home ho aggiunto "data-exclude" all'li di Home e su Album all'li di Albums
  // in caso contrario sarebbero stati "colpiti" tutti gli li, e quindi la classe light sarebbe stata rimossa

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
