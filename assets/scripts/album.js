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
document
  .getElementById('download-icon')
  .addEventListener('mouseenter', function () {
    const icon = this.querySelector('i')
    if (!icon.classList.contains('text-light')) {
      icon.classList.remove('text-white-50')
      icon.classList.add('text-light')
    }
  })

document
  .getElementById('download-icon')
  .addEventListener('mouseleave', function () {
    const icon = this.querySelector('i')
    if (!this.hasAttribute('data-active')) {
      icon.classList.remove('text-light')
      icon.classList.add('text-white-50')
    }
  })
document
  .getElementById('dots-icon')
  .addEventListener('mouseenter', function () {
    const icon = this.querySelector('i')
    if (!icon.classList.contains('text-light')) {
      icon.classList.remove('text-white-50')
      icon.classList.add('text-light')
    }
  })

document
  .getElementById('dots-icon')
  .addEventListener('mouseleave', function () {
    const icon = this.querySelector('i')
    if (!this.hasAttribute('data-active')) {
      icon.classList.remove('text-light')
      icon.classList.add('text-white-50')
    }
  })
