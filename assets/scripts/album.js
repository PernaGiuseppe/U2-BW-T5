// Bottone per tornare indietro alla home

document.getElementById("back-icon").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "home.html";
});

const endpointAlbum =
  "https://striveschool-api.herokuapp.com/api/deezer/album/";

const id = new URLSearchParams(location.search).get("id");

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

const generateAlbum = function () {
  fetch(endpointAlbum + id)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          `HTTP error ${response.status}: ${response.statusText}`
        );
      }
    })
    .then((album) => {
      // Salvo la lista delle tracce e l'indice corrente come variabili globali
      window.albumTracks = album.tracks.data;
      window.currentAlbumIndex = 0;
      const titleArea = document.getElementById("titleArea");
      const albumDuration = formatTime(album.duration);
      const artistName1 = album.artist.name.replace(/\s+/g, "");
      titleArea.innerHTML = `
      <div
                          class="album-cover rounded d-flex align-items-center justify-content-center me-4 shadow"
                        >
                          <img
                            style="height: 220px"
                            src="${album.cover_medium}"
                            alt="album-img"
                          />
                        </div>
                        <div><small class="text-white-50">ALBUM</small>
                          <h1 class="display-3 fw-bold mb-2">
                            ${album.title}
                          </h1>
                          <div class="text-white-50">
                            <img
                              class="rounded-circle me-1"
                              width="28px"
                              height="28px"
                              src="${album.artist.picture_small}"
                            />
                            <strong class="text-white"
                              ><a href="artist.html?artist=${artistName1}&id=${album.artist.id}" class="fw-normal text-white-50 text-decoration-none">${album.artist.name}</a></strong
                            >
                            • ${album.release_date} • ${album.tracks.data.length} brani, durata: ${albumDuration}.
                          </div></div>`;
      const songsArea = document.getElementById("albumSongs");
      for (let i = 0; i < album.tracks.data.length; i++) {
        let duration = formatTime(album.tracks.data[i].duration);
        let artistName = album.tracks.data[i].artist.name.replace(/\s+/g, "");
        songsArea.insertAdjacentHTML(
          "beforeend",
          `
    <div
      class="row align-items-center p-3 border-bottom border-secondary border-opacity-10 track-item"
      data-track-index="${i}"
    >
      <div class="col-1 text-center text-white-50">${i + 1}</div>
      <div class="col-4 d-flex align-items-center gap-2">
        <button
          class="btn btn-link p-0 play-track-btn" data-track-index="${i}"title="Riproduci">
          <i class="bi bi-play-circle text-epi-cyan" style="font-size: 1.3em"></i>
        </button>
        <div class="fw-normal text-white">${album.tracks.data[i].title}</div>
      </div>
      <div class="col-3 text-white-50"><a href="artist.html?artist=${artistName}&id=${
            album.tracks.data[i].artist.id
          }" class="fw-normal text-white-50 text-decoration-none">${
            album.tracks.data[i].artist.name
          }</a></div>
      <div class="col-2 text-end text-white-50">${
        album.tracks.data[i].rank
      }</div>
      <div class="col-2 text-end text-white-50">${duration}</div>
    </div>
      `
        );
      }
      // Aggiungo event listener ai pulsanti play accanto ad ogni canzone
      setTimeout(() => {
        const playBtns = document.querySelectorAll(".play-track-btn");
        playBtns.forEach((btn) => {
          btn.onclick = function (e) {
            e.preventDefault(); // Previene la propagazione del click sulla riga
            const idx = parseInt(btn.getAttribute("data-track-index"));
            if (!isNaN(idx) && window.albumTracks && window.albumTracks[idx]) {
              window.currentAlbumIndex = idx;
              window.playTrackById(window.albumTracks[idx].id);
            }
          };
        });
      }, 100);
      // Aggiungo event listener a ogni traccia per farla partire nella mediabar al click sulla riga (escluso il click sul play)
      const trackItems = document.querySelectorAll(".track-item");
      trackItems.forEach((item) => {
        item.addEventListener("click", function (e) {
          // Se il click è sul bottone play, non faccio nulla (già gestito sopra)
          if (e.target.closest(".play-track-btn")) return;
          const idx = parseInt(item.getAttribute("data-track-index"));
          window.currentAlbumIndex = idx;
          if (window.albumTracks && window.albumTracks[idx]) {
            window.playTrackById(window.albumTracks[idx].id);
          }
        });
      });
      // Aggiungo event listener al bottone play principale dell'album
      const playMainBtn = document.querySelector(".btn-epi-cyan");
      if (playMainBtn) {
        playMainBtn.onclick = function () {
          // Imposta l'indice corrente a 0 e avvia la prima traccia
          window.currentAlbumIndex = 0;
          if (window.albumTracks && window.albumTracks.length > 0) {
            window.playTrackById(window.albumTracks[0].id);
          }
        };
      }
    })
    .catch((err) => {
      alert(err);
    });
};
generateAlbum();
