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
