// Player audio dinamico

// ID della traccia su Deezer per 'Balorda nostalgia' di Olly
const TRACK_ID = 3229863571 // ID reale della traccia su Deezer

// Stato del player
let audio = null // Oggetto Audio
let isPlaying = false // Stato riproduzione
let isShuffle = false // Stato shuffle (inutile con una sola traccia, ma pronto per futuro)
let isRepeat = false // Stato repeat

// Funzione per formattare i secondi in mm:ss
function formatTime(seconds) {
  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60)
  return `${min}:${sec < 10 ? '0' : ''}${sec}`
}

// Funzione per aggiornare la UI del player con i dati della traccia
function updatePlayerUI(track) {
  // Aggiorna copertina
  const coverImg = document.querySelector('.album-covers')
  if (coverImg) coverImg.src = track.album.cover_medium
  // Aggiorna titolo brano
  const titleDiv = document.querySelector('.player .text-secondary')
  if (titleDiv) titleDiv.textContent = track.title
  // Aggiorna artista
  const artistSmall = document.querySelector('.player small.text-secondary')
  if (artistSmall) artistSmall.textContent = track.artist.name
  // Aggiorna durata
  const durationSpan = document.querySelectorAll(
    '.player span.text-secondary'
  )[1]
  if (durationSpan) durationSpan.textContent = formatTime(track.duration)
}

// Funzione per resettare la barra di avanzamento e il tempo
function resetProgressBar() {
  // Seleziona la barra di avanzamento
  const progressBar = document.querySelector(
    '.player input[type="range"][max="200"]'
  )
  // Seleziona il timer corrente
  const currentTimeSpan = document.querySelectorAll(
    '.player span.text-secondary'
  )[0]
  if (audio) audio.currentTime = 0 // Riporta anche il tempo effettivo a 0
  if (progressBar) {
    progressBar.value = 0 // Riporta la pallina a 0
  }
  if (currentTimeSpan) {
    currentTimeSpan.textContent = '0:00' // Riporta il timer a 0
  }
}

// Funzione principale per inizializzare il player
async function initPlayer() {
  try {
    // Recupera i dati della traccia dall'API Deezer
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/track/${TRACK_ID}`
    )
    const track = await res.json()
    // Aggiorna la UI del player
    updatePlayerUI(track)
    // Crea elemento audio
    audio = new Audio(track.preview) // preview di 30 secondi
    audio.currentTime = 0 // Parte sempre dall'inizio
    isPlaying = false
    // Se il player era già in ascolto, resetta la barra
    resetProgressBar()
    // Gestione play/pausa
    const playBtn = document.querySelector('.player .btn-epi-cyan')
    playBtn.innerHTML = '<i class="bi bi-play-fill"></i>'
    playBtn.onclick = function () {
      if (!isPlaying) {
        audio.play()
        playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>'
        isPlaying = true
      } else {
        audio.pause()
        playBtn.innerHTML = '<i class="bi bi-play-fill"></i>'
        isPlaying = false
      }
    }
    // Gestione barra di avanzamento
    const progressBar = document.querySelector(
      '.player input[type="range"][max="200"]'
    )
    const currentTimeSpan = document.querySelectorAll(
      '.player span.text-secondary'
    )[0]
    progressBar.value = 0
    progressBar.max = track.duration
    let hasReset = false // Flag per evitare reset multipli
    audio.addEventListener('timeupdate', function () {
      if (isPlaying) {
        if (progressBar) progressBar.value = Math.floor(audio.currentTime)
        if (currentTimeSpan)
          currentTimeSpan.textContent = formatTime(audio.currentTime)
      }
      // Se per qualche motivo si supera 30s, resetta (ma solo una volta)
      if (audio.currentTime >= 30 && !hasReset) {
        audio.pause()
        playBtn.innerHTML = '<i class="bi bi-play-fill"></i>'
        isPlaying = false
        resetProgressBar()
        hasReset = true
      }
    })
    progressBar.addEventListener('input', function () {
      audio.currentTime = progressBar.value
    })
    // Quando la traccia finisce (evento ended)
    audio.addEventListener('ended', function () {
      // Se la modalità repeat è attiva, riparte la traccia da capo
      if (isRepeat) {
        audio.currentTime = 0 // Riporta l'audio all'inizio
        audio.play() // Fa ripartire la riproduzione
        isPlaying = true
        playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>'
        hasReset = false
      } else {
        playBtn.innerHTML = '<i class="bi bi-play-fill"></i>'
        isPlaying = false
        resetProgressBar()
        hasReset = true
      }
    })
    // Quando parte la riproduzione, resetta il flag
    audio.addEventListener('play', function () {
      hasReset = false
    })
    // Gestione volume
    const volumeBar = document.querySelector(
      '.player input[type="range"][max="100"]'
    )
    const volumeIcon = document.querySelector('.player .bi-volume-up')
    let lastVolume = 0.5 // Per ricordare il volume precedente al mute
    audio.volume = 0.5 // Volume di default
    if (volumeBar) {
      volumeBar.value = audio.volume * 100
      volumeBar.addEventListener('input', function () {
        audio.volume = volumeBar.value / 100
        // Cambia icona in base al volume
        if (audio.volume === 0) {
          volumeIcon.classList.remove('bi-volume-up')
          volumeIcon.classList.add('bi-volume-mute')
        } else {
          volumeIcon.classList.remove('bi-volume-mute')
          volumeIcon.classList.add('bi-volume-up')
        }
      })
    }
    // Click sull'icona volume per mutare/smutare
    if (volumeIcon) {
      volumeIcon.parentElement.onclick = function () {
        if (audio.volume > 0) {
          lastVolume = audio.volume
          audio.volume = 0
          if (volumeBar) volumeBar.value = 0
          volumeIcon.classList.remove('bi-volume-up')
          volumeIcon.classList.add('bi-volume-mute')
        } else {
          audio.volume = lastVolume || 0.5
          if (volumeBar) volumeBar.value = audio.volume * 100
          volumeIcon.classList.remove('bi-volume-mute')
          volumeIcon.classList.add('bi-volume-up')
        }
      }
    }
    // Pulsante avanti (skip-end)
    const nextBtn = document.querySelector('.player .bi-skip-end-fill')
    if (nextBtn) {
      nextBtn.parentElement.onclick = function () {
        audio.currentTime = 0 // Con una sola traccia, riparte dall'inizio
        if (!isPlaying) {
          playBtn.click() // Fa partire la riproduzione se era in pausa
        }
      }
    }
    // Pulsante indietro (skip-start)
    const prevBtn = document.querySelector('.player .bi-skip-start-fill')
    if (prevBtn) {
      prevBtn.parentElement.onclick = function () {
        audio.currentTime = 0 // Torna all'inizio della traccia
        if (!isPlaying) {
          playBtn.click()
        }
      }
    }
    // Pulsante shuffle
    const shuffleBtn = document.querySelector('.player .bi-shuffle')
    if (shuffleBtn) {
      // Hover: colore epi-cyan
      shuffleBtn.parentElement.onmouseenter = function () {
        if (!isShuffle) shuffleBtn.style.color = '#00e1e7'
      }
      shuffleBtn.parentElement.onmouseleave = function () {
        if (!isShuffle) shuffleBtn.style.color = ''
      }
      shuffleBtn.parentElement.onclick = function () {
        isShuffle = !isShuffle
        if (isShuffle) {
          shuffleBtn.style.color = '#00e1e7'
        } else {
          shuffleBtn.style.color = ''
        }
      }
    }
    // Pulsante repeat
    const repeatBtn = document.querySelector('.player .bi-repeat')
    if (repeatBtn) {
      // Hover: colore epi-cyan
      repeatBtn.parentElement.onmouseenter = function () {
        if (!isRepeat) repeatBtn.style.color = '#00e1e7'
      }
      repeatBtn.parentElement.onmouseleave = function () {
        if (!isRepeat) repeatBtn.style.color = ''
      }
      repeatBtn.parentElement.onclick = function () {
        isRepeat = !isRepeat
        if (isRepeat) {
          repeatBtn.style.color = '#00e1e7'
        } else {
          repeatBtn.style.color = ''
        }
      }
    }
    // Pulsante cuore (like)
    const heartBtn = document.querySelector('.player .bi-heart')
    let isHeart = false // Stato del cuore
    if (heartBtn) {
      // Hover: colore epi-cyan
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
    }
    // Pulsante lista e microfono
    const listBtn = document.querySelector('.player .bi-list')
    const micBtn = document.querySelector('.player .bi-mic')
    let isListActive = false // Stato della lista
    if (listBtn && micBtn) {
      // Hover: colore epi-cyan
      listBtn.parentElement.onmouseenter = function () {
        if (!isListActive) listBtn.style.color = '#00e1e7'
      }
      listBtn.parentElement.onmouseleave = function () {
        if (!isListActive) listBtn.style.color = ''
      }
      listBtn.parentElement.onclick = function () {
        isListActive = !isListActive
        if (isListActive) {
          listBtn.style.color = '#00e1e7'
          micBtn.style.display = 'inline-block'
        } else {
          listBtn.style.color = ''
          micBtn.style.display = 'none'
        }
      }
      // Inizialmente nascondo il microfono
      micBtn.style.display = 'none'
      // Hover e selezione per il microfono
      let isMicActive = false
      micBtn.parentElement.onmouseenter = function () {
        if (!isMicActive) micBtn.style.color = '#00e1e7'
      }
      micBtn.parentElement.onmouseleave = function () {
        if (!isMicActive) micBtn.style.color = ''
      }
      micBtn.parentElement.onclick = function () {
        isMicActive = !isMicActive
        if (isMicActive) {
          micBtn.style.color = '#00e1e7'
        } else {
          micBtn.style.color = ''
        }
      }
    }
    // Gestione selezione dispositivo di uscita audio (stile custom coerente con il sito)
    const speakerIcon = document.querySelector('.player .bi-speaker')
    let sinkMenu = null // Popup custom per i dispositivi
    if (speakerIcon && typeof audio.setSinkId === 'function') {
      speakerIcon.parentElement.onclick = async function (e) {
        e.preventDefault()
        // Se il menu esiste già, lo rimuovo
        if (sinkMenu) {
          sinkMenu.remove()
          sinkMenu = null
          return
        }
        // Creo il popup custom
        sinkMenu = document.createElement('div')
        sinkMenu.style.position = 'absolute'
        sinkMenu.style.bottom = '60px'
        sinkMenu.style.right = '40px'
        sinkMenu.style.zIndex = 9999
        sinkMenu.style.background = '#222'
        sinkMenu.style.color = '#fff'
        sinkMenu.style.borderRadius = '10px'
        sinkMenu.style.boxShadow = '0 4px 16px #0008'
        sinkMenu.style.padding = '8px 0'
        sinkMenu.style.minWidth = '220px'
        sinkMenu.style.fontSize = '1rem'
        sinkMenu.style.opacity = '0'
        sinkMenu.style.transition = 'opacity 0.2s'
        setTimeout(() => {
          sinkMenu.style.opacity = '1'
        }, 10)
        // Titolo
        const title = document.createElement('div')
        title.textContent = 'Seleziona uscita audio:'
        title.style.fontWeight = 'bold'
        title.style.padding = '6px 18px 6px 18px'
        title.style.fontSize = '0.95rem'
        // Sostituisco il verde con epi-cyan
        title.style.color = '#00e1e7' // epi-cyan (sostituisci con la variabile CSS se presente)
        sinkMenu.appendChild(title)
        // Recupero i dispositivi audio
        const devices = await navigator.mediaDevices.enumerateDevices()
        const audioOutputs = devices.filter((d) => d.kind === 'audiooutput')
        audioOutputs.forEach((device) => {
          const item = document.createElement('div')
          item.textContent = device.label || `Uscita audio (${device.deviceId})`
          item.style.padding = '8px 18px'
          item.style.cursor = 'pointer'
          item.style.borderRadius = '6px'
          item.style.transition = 'background 0.15s, color 0.15s'
          item.onmouseenter = () => {
            item.style.background = '#00e1e7' // epi-cyan
            item.style.color = '#181818'
          }
          item.onmouseleave = () => {
            item.style.background = 'none'
            item.style.color = '#fff'
          }
          item.onclick = () => {
            const sinkId = device.deviceId
            audio
              .setSinkId(sinkId)
              .then(() => {
                if (sinkMenu && sinkMenu.parentNode) {
                  sinkMenu.parentNode.removeChild(sinkMenu)
                  sinkMenu = null
                }
              })
              .catch((err) => {
                alert('Errore nel cambiare dispositivo di uscita: ' + err)
                if (sinkMenu && sinkMenu.parentNode) {
                  sinkMenu.parentNode.removeChild(sinkMenu)
                  sinkMenu = null
                }
              })
          }
          sinkMenu.appendChild(item)
        })
        // Aggiungo il popup al DOM
        speakerIcon.parentElement.appendChild(sinkMenu)
        // Chiudi menu se si clicca fuori
        setTimeout(() => {
          document.addEventListener('click', function handler(ev) {
            if (
              sinkMenu &&
              !sinkMenu.contains(ev.target) &&
              ev.target !== speakerIcon
            ) {
              if (sinkMenu && sinkMenu.parentNode) {
                sinkMenu.parentNode.removeChild(sinkMenu)
                sinkMenu = null
              }
              document.removeEventListener('click', handler)
            }
          })
        }, 50)
      }
    } else if (speakerIcon) {
      // Se il browser non supporta setSinkId
      speakerIcon.parentElement.onclick = function () {
        alert(
          'La selezione del dispositivo di uscita audio non è supportata su questo browser.'
        )
      }
    }
  } catch (err) {
    // Gestione errori
    console.error('Errore nel recupero dati traccia:', err)
  }
}

document.addEventListener('DOMContentLoaded', initPlayer)
