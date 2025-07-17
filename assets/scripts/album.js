// Bottone per tornare indietro alla home

document.getElementById('back-icon').addEventListener('click', function (e) {
  e.preventDefault()
  window.location.href = 'home.html'
})

// Questo codice rende tutti gli elementi "a,i" all'interno del menu li dell'ul, bianchi all'hover del mouse

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

// Questa funzione rende tutte le classi heart dentro i button, cyan all'hover e cambia l'icona rendendola tutta dello stesso colore cyan
const heartBtns = document.querySelectorAll('button .bi-heart')
heartBtns.forEach((heartBtn) => {
  let isHeart = false
  heartBtn.parentElement.onmouseenter = function () {
    if (!isHeart) heartBtn.style.color = '#00e1e7'
  }
  heartBtn.parentElement.onmouseleave = function () {
    if (!isHeart) heartBtn.style.color = ''
  }
  heartBtn.parentElement.onclick = function () {
    isHeart = !isHeart
    if (isHeart) {
      heartBtn.style.color = '#00e1e7'
      heartBtn.classList.remove('bi-heart')
      heartBtn.classList.add('bi-heart-fill')
    } else {
      heartBtn.style.color = ''
      heartBtn.classList.remove('bi-heart-fill')
      heartBtn.classList.add('bi-heart')
    }
  }
})
