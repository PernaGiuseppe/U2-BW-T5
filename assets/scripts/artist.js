function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}
const endpointSearch =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const artistName = new URLSearchParams(location.search).get("artist");
const endpointArtist =
  "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const artistId = new URLSearchParams(location.search).get("id");

let randomNumber = function () {
  return Math.ceil(Math.random() * 20);
};

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
      for (let i = 0; i < 5; i++) {
        const duration = formatTime(artistObj.data[i].duration);
        topSongsArea.insertAdjacentHTML(
          "beforeend",
          `<div
                          class="row align-items-center p-3 border-bottom border-secondary border-opacity-10 track-item"
                        >
                          <div class="col-1 text-center text-white-50">${
                            i + 1
                          }</div>
                          <div class="col-1">
                            <img
                              class="me-md-3 mb-md-2"
                              src=${artistObj.data[i].album.cover_small}
                              style="width: 2rem"
                            />
                          </div>
                          <div class="col-5 ps-md-3 ps-4 order-1 order-md-3">
                            <div class="fw-normal text-light">${
                              artistObj.data[i].title
                            }</div>
                            <!-- Numero  visibile solo su mobile sotto  -->
                            <div
                              class="text-white-50 d-md-none"
                              style="font-size: 0.5em"
                            >
                              ${artistObj.data[i].rank}
                            </div>
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
    })
    .catch((err) => {
      alert(err);
    });
};
generateArtist();
generateTop5();
