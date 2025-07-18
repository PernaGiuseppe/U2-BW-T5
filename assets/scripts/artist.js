// Funzione per formattare i secondi in mm:ss
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}
// Endpoint per la ricerca delle tracce dell'artista
const endpointSearch =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
// Recupero il nome dell'artista dalla query string
const artistName = new URLSearchParams(location.search).get("artist");
// Endpoint per i dettagli dell'artista
const endpointArtist =
  "https://striveschool-api.herokuapp.com/api/deezer/artist/";
// Recupero l'id dell'artista dalla query string
const artistId = new URLSearchParams(location.search).get("id");

// Funzione per generare un numero casuale (per i like)
let randomNumber = function () {
  return Math.ceil(Math.random() * 20);
};

// Funzione per generare le info dell'artista
const generateArtist = function () {
  fetch(endpointArtist + artistId)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `HTTP error ${response.status}: ${response.statusText}`
        );
      }
    })
    .then((artistInfo) => {
      const artistNameH1 = document.getElementById("bigName");
      artistNameH1.innerText = artistInfo.name;
      const fans = document.getElementById("fans");
      fans.innerText = `${artistInfo.nb_fan} ascoltatori mensili`;
      const imgBanner = document.getElementById("imgBanner");
      imgBanner.style.backgroundImage = `url('${artistInfo.picture_xl}')`;
      const likesName = document.getElementById("likesName");
      likesName.innerText = `di ${artistInfo.name}`;
      const numberLikes = document.getElementById("numberLikes");
      const number = randomNumber();
      numberLikes.innerText = ` Hai messo mi piace a ${number} brani`;
      const imgLikes = document.getElementById("imgLikes");
      imgLikes.src = artistInfo.picture_small;
    })
    .catch((err) => {
      alert(err);
    });
};

// Funzione per generare la top 5 delle canzoni popolari dell'artista
const generateTop5 = function () {
  fetch(endpointSearch + artistName)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `HTTP error ${response.status}: ${response.statusText}`
        );
      }
    })
    .then((artistObj) => {
      const topSongsArea = document.getElementById("topSongs");
      // Salvo le tracce in una variabile globale per la mediabar
      window.albumTracks = artistObj.data.slice(0, 5); // Solo le prime 5 tracce
      window.currentAlbumIndex = 0; // Indice della traccia attuale
      topSongsArea.innerHTML = ""; // Svuoto l'area prima di inserire
      for (let i = 0; i < 5; i++) {
        const duration = formatTime(artistObj.data[i].duration);
        // Inserisco il bottone play accanto al titolo della traccia
        topSongsArea.insertAdjacentHTML(
          "beforeend",
          `<div
            class="row align-items-center p-3 border-bottom border-secondary border-opacity-10 track-item"
            data-track-index="${i}"
          >
            <div class="col-1 text-center text-white-50">${i + 1}</div>
            <div class="col-1">
              <img
                class="me-md-3 mb-md-2"
                src="${artistObj.data[i].album.cover_small}"
                style="width: 2rem"
              />
            </div>
            <div class="col-5 ps-md-3 ps-4 order-1 order-md-3 d-flex align-items-center gap-2">
              <button class="btn btn-link p-0 play-track-btn" data-track-index="${i}" title="Riproduci">
                <i class="bi bi-play-circle text-epi-cyan" style="font-size:1.3em;"></i>
              </button>
              <div class="fw-normal text-light">${artistObj.data[i].title}</div>
            </div>
            <!-- Numero  visibile solo su mobile sotto  -->
            <div
              class="text-white-50 d-md-none"
              style="font-size: 0.5em"
            >
              ${artistObj.data[i].rank}
            </div>
            <!-- Numero grande visibile solo su md+ -->
            <div
              class="col-3 text-end text-white-50 d-none d-md-block order-md-4"
            >
              ${artistObj.data[i].rank}
            </div>
            <!-- Orario 4:17 visibile solo su md+ -->
            <div
              class="col-2 text-end text-white-50 d-none d-md-flex justify-content-end order-md-5"
            >
              ${duration}
            </div>
            <!-- Tre puntini verticali visibili solo su mobile -->
            <div
              class="col-2 text-end text-white-50 d-flex d-md-none justify-content-end order-4 flex-grow-1 pe-4"
              style="font-size: 1.5rem; line-height: 1"
            >
              &#8942;
            </div>
          </div>`
        );
      }
      // Aggiungo event listener ai bottoni play accanto ad ogni traccia
      setTimeout(() => {
        const playBtns = document.querySelectorAll(".play-track-btn");
        playBtns.forEach((btn) => {
          btn.onclick = function (e) {
            e.preventDefault(); // Previene la propagazione del click sulla riga
            const idx = parseInt(btn.getAttribute("data-track-index"));
            if (!isNaN(idx) && window.albumTracks && window.albumTracks[idx]) {
              window.currentAlbumIndex = idx; // Aggiorno l'indice corrente
              window.playTrackById(window.albumTracks[idx].id); // Avvio la traccia selezionata
            }
          };
        });
      }, 100);
    })
    .catch((err) => {
      alert(err);
    });
};

generateArtist();
generateTop5();

// Gestione tasto play grande in alto a sinistra
setTimeout(() => {
  // Seleziono il bottone play grande (icona bi-play-circle-fill)
  const bigPlayBtn = document.querySelector(".bi-play-circle-fill");
  if (bigPlayBtn) {
    bigPlayBtn.parentElement.onclick = function () {
      // Imposto l'indice corrente a 0 e avvio la prima traccia
      if (window.albumTracks && window.albumTracks.length > 0) {
        window.currentAlbumIndex = 0;
        window.playTrackById(window.albumTracks[0].id);
      }
    };
  }
}, 500); // Timeout per assicurarsi che il DOM sia pronto
