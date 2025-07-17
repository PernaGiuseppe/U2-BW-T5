// Script per la ricerca Deezer con modale

// Funzione debounce per limitare le chiamate API
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Seleziono elementi del DOM
const searchModal = document.getElementById("searchModal"); // Modale
const searchInput = document.getElementById("searchInput"); // Input ricerca
const searchResults = document.getElementById("searchResults"); // Area risultati
const closeSearchModal = document.getElementById("closeSearchModal"); // Bottone chiusura

// Funzione per mostrare il modale con fade-in e priorità
function openSearchModal() {
  searchModal.style.display = "flex"; // Flex per centratura
  setTimeout(() => {
    searchModal.style.opacity = "1"; // Fade-in
    searchInput.focus();
  }, 10);
  searchInput.value = "";
  searchResults.innerHTML = "";
}

// Funzione per chiudere il modale con fade-out
function hideSearchModal() {
  searchModal.style.opacity = "0";
  setTimeout(() => {
    searchModal.style.display = "none";
  }, 200);
}

// Event listener per chiudere il modale
closeSearchModal.addEventListener("click", hideSearchModal);
// Chiudi anche con ESC
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && searchModal.style.display !== "none")
    hideSearchModal();
});

// Event listener per apertura modale (icona search)
document.querySelectorAll(".bi-search").forEach((icon) => {
  // Se la lente è dentro un <a>, previeni il default
  icon.parentElement.addEventListener("click", function (e) {
    e.preventDefault();
    openSearchModal();
  });
  icon.addEventListener("click", function (e) {
    e.preventDefault();
    openSearchModal();
  });
});

// Funzione per mostrare i risultati della ricerca
function renderResults(data) {
  // Svuoto l'area risultati
  searchResults.innerHTML = "";
  if (!data || !data.data || data.data.length === 0) {
    searchResults.innerHTML =
      '<div class="text-secondary">Nessun risultato trovato.</div>';
    return;
  }
  // Creo una card per ogni brano
  data.data.forEach((track) => {
    // Card risultato
    const div = document.createElement("div");
    div.className =
      "d-flex align-items-center mb-2 p-2 bg-secondary bg-opacity-10 rounded";
    div.innerHTML = `
      <img src="${track.album.cover_small}" alt="Copertina" style="width:48px; height:48px; object-fit:cover; border-radius:6px;">
      <div class="ms-3 flex-grow-1">
        <div class="fw-bold text-light">${track.title}</div>
        <div class="text-secondary">${track.artist.name}</div>
      </div>
      <button class="btn btn-epi-cyan btn-sm play-preview" data-preview="${track.preview}" data-title="${track.title}" data-artist="${track.artist.name}" data-cover="${track.album.cover_medium}" data-trackid="${track.id}">
        <i class="bi bi-play-fill"></i>
      </button>
    `;
    searchResults.appendChild(div);
  });
}

// Funzione per effettuare la ricerca su Deezer
async function searchDeezer(query) {
  if (!query || query.length < 2) {
    searchResults.innerHTML =
      '<div class="text-secondary">Digita almeno 2 caratteri...</div>';
    return;
  }
  searchResults.innerHTML = '<div class="text-secondary">Caricamento...</div>';
  try {
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${encodeURIComponent(
        query
      )}`
    );
    const data = await res.json();
    renderResults(data);
  } catch (err) {
    searchResults.innerHTML =
      '<div class="text-danger">Errore nella ricerca.</div>';
  }
}

// Applico debounce alla funzione di ricerca
const debouncedSearch = debounce(function () {
  searchDeezer(searchInput.value.trim());
}, 500);

// Event listener sull'input di ricerca
searchInput.addEventListener("input", debouncedSearch);

// Gestione play preview (integrazione con mediabar.js)
searchResults.addEventListener("click", function (e) {
  const btn = e.target.closest(".play-preview");
  if (btn) {
    // Recupero l'ID della traccia dal risultato (devo aggiungerlo come data-trackid)
    const trackId = btn.getAttribute("data-trackid");
    if (window.playTrackById && trackId) {
      // Chiamo la funzione globale per cambiare traccia nella mediabar
      window.playTrackById(trackId);
      // Chiudo il modale dopo aver premuto play
      hideSearchModal();
      return;
    }
    // Recupero dati dal bottone
    const preview = btn.getAttribute("data-preview");
    const title = btn.getAttribute("data-title");
    const artist = btn.getAttribute("data-artist");
    const cover = btn.getAttribute("data-cover");
    // Aggiorno la UI del player principale (come in mediabar.js)
    const coverImg = document.querySelector(".album-covers");
    if (coverImg) coverImg.src = cover;
    const titleDiv = document.querySelector(".player .text-secondary");
    if (titleDiv) titleDiv.textContent = title;
    const artistSmall = document.querySelector(".player small.text-secondary");
    if (artistSmall) artistSmall.textContent = artist;
    // Creo nuovo oggetto Audio per la preview
    if (window.audio && typeof window.audio.pause === "function")
      window.audio.pause();
    window.audio = new Audio(preview);
    window.audio.currentTime = 0;
    window.audio.play();
    // Aggiorno i bottoni play/pausa
    const playBtn = document.querySelector(".player .btn-epi-cyan");
    if (playBtn) {
      playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
      playBtn.onclick = function () {
        if (window.audio.paused) {
          window.audio.play();
          playBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
        } else {
          window.audio.pause();
          playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        }
      };
    }
    // Aggiorno la barra di avanzamento (solo per la preview di 30s)
    const progressBar = document.querySelector(
      '.player input[type="range"][max="200"]'
    );
    const currentTimeSpan = document.querySelectorAll(
      ".player span.text-secondary"
    )[0];
    const durationSpan = document.querySelectorAll(
      ".player span.text-secondary"
    )[1];
    if (progressBar) {
      progressBar.value = 0;
      progressBar.max = 30;
    }
    if (durationSpan) durationSpan.textContent = "0:30";
    // Aggiorna la barra durante la riproduzione
    window.audio.ontimeupdate = function () {
      if (progressBar) progressBar.value = Math.floor(window.audio.currentTime);
      if (currentTimeSpan)
        currentTimeSpan.textContent = `${Math.floor(
          window.audio.currentTime / 60
        )}:${(Math.floor(window.audio.currentTime) % 60)
          .toString()
          .padStart(2, "0")}`;
      if (window.audio.currentTime >= 30) {
        window.audio.pause();
        if (playBtn) playBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        if (progressBar) progressBar.value = 0;
        if (currentTimeSpan) currentTimeSpan.textContent = "0:00";
      }
    };
    // Permetti di muovere la barra
    if (progressBar) {
      progressBar.oninput = function () {
        window.audio.currentTime = progressBar.value;
      };
    }
    // Chiudi il modale dopo aver premuto play
    hideSearchModal();
  }
});
