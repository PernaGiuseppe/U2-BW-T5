// Bottone per tornare indietro alla home

document.getElementById('back-icon').addEventListener('click', function (e) {
  e.preventDefault()
  window.location.href = 'home.html'
})

const endpointAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/'

const id = new URLSearchParams(location.search).get('id')

function formatTime(seconds) {
  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60)
  return `${min}:${sec < 10 ? '0' : ''}${sec}`
}

const generateAlbum = function () {
  fetch(endpointAlbum + id)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`)
      }
    })
    .then((album) => {
      const titleArea = document.getElementById('titleArea')
      const albumDuration = formatTime(album.duration)

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
                        <div>
      <small class="text-white-50">ALBUM</small>
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
                              >${album.artist.name}</strong
                            >
                            • ${album.release_date} • ${album.tracks.data.length} brani, durata: ${albumDuration}.
                          </div></div>`
      const songsArea = document.getElementById('albumSongs')
      for (let i = 0; i < album.tracks.data.length; i++) {
        let duration = formatTime(album.tracks.data[i].duration)
        songsArea.insertAdjacentHTML(
          'beforeend',
          `
      <div
                            class="row align-items-center p-3 border-bottom border-secondary border-opacity-10 track-item"
                          >
                            <div class="col-1 text-center text-white-50">${
                              i + 1
                            }</div>
                            <div class="col-6">
                              <div class="fw-normal">${
                                album.tracks.data[i].title
                              }</div>
                              <small class="text-white-50"
                                >${album.tracks.data[i].artist.name}</small
                              >
                            </div>
                            <div class="col-3 text-end text-white-50">
                              ${album.tracks.data[i].rank}
                            </div>
                            <div class="col-2 text-end text-white-50">${duration}</div>
                          </div>
                          `
        )
      }
    })
    .catch((err) => {
      alert(err)
    })
}
generateAlbum()
