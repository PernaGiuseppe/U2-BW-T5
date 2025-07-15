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

document.getElementById('heartBtn').addEventListener('mouseenter', function () {
  const icon = this.querySelector('i')
  if (!icon.classList.contains('text-success')) {
    icon.classList.remove('text-white-50')
    icon.classList.add('text-success')
  }
})

document.getElementById('heartBtn').addEventListener('mouseleave', function () {
  const icon = this.querySelector('i')
  if (!this.hasAttribute('data-active')) {
    icon.classList.remove('text-success')
    icon.classList.add('text-white-50')
  }
})

document.getElementById('heartBtn').addEventListener('click', function () {
  const icon = this.querySelector('i')
  if (this.hasAttribute('data-active')) {
    this.removeAttribute('data-active')
    icon.classList.remove('text-success')
    icon.classList.add('text-white-50')
  } else {
    this.setAttribute('data-active', 'true')
    icon.classList.remove('text-white-50')
    icon.classList.add('text-success')
  }
})

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
