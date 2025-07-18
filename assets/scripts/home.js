const albums1 = [69804312, 86994002, 50762752, 683321081, 5941967, 13606387]
const albums2 = [
  779026251, 787248701, 779393081, 786053971, 786280691, 779020321,
]
const colors = [
  'bg-dark',
  'bg-epi-blue',
  'bg-epi-violet',
  'bg-epi-violpink',
  'bg-epi-pink',
  'bg-epi-pink-light',
]
const endpointAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/'
const showButton = document.getElementById('showAds')
const showBtnArea = document.getElementById('showButton')
const hideHero = document.getElementById('hideAds')
const heroSection = document.getElementById('hero')

hideHero.addEventListener('click', () => {
  heroSection.classList.add('d-md-none')
  showBtnArea.classList.remove('d-none')
})

showButton.addEventListener('click', () => {
  heroSection.classList.remove('d-md-none')
  showBtnArea.classList.add('d-none')
})

const generateAlbumsRow1 = function (albums) {
  const albumsArea1 = document.getElementById('albums1')
  const albumPromises = albums.map((albumId) =>
    fetch(endpointAlbum + albumId).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`)
      }
      return response.json()
    })
  )
  Promise.all(albumPromises)
    .then((results) => {
      results.forEach((singleAlbum, i) => {
        const isLast = i === results.length - 1
        const hiddenClass = isLast ? 'd-none' : ''
        albumsArea1.insertAdjacentHTML(
          'beforeend',
          `
        <a href="album.html?id=${
          singleAlbum.id
        }" class="text-decoration-none">        
        <div class="col">
            <div class="card ${
              colors[i % colors.length]
            } text-light border border-epi-blue shadow ${hiddenClass}">
              <img src="${
                singleAlbum.cover_medium
              }" class="card-img-top" alt="Album" />
              <div class="card-body">
                <h6 class="card-title">${singleAlbum.title}</h6>
                <p class="card-text">${singleAlbum.contributors[0].name}</p>
              </div>
            </div>
          </div>
          </a>
        `
        )
      })
    })
    .catch((error) => {
      alert(error)
    })
}

const generateAlbumsRow2 = function (albums) {
  const albumsArea2 = document.getElementById('albums2')
  const albumPromises = albums.map((albumId) =>
    fetch(endpointAlbum + albumId).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`)
      }
      return response.json()
    })
  )
  Promise.all(albumPromises)
    .then((results) => {
      results.forEach((singleAlbum, i) => {
        const isLast = i === results.length - 1
        const hiddenClass = isLast ? 'd-none' : ''
        albumsArea2.insertAdjacentHTML(
          'beforeend',
          `
        <a href="album.html?id=${
          singleAlbum.id
        }" class="text-decoration-none">  
        <div class="col">
            <div class="card ${
              colors[i % colors.length]
            } text-light border border-epi-blue shadow ${hiddenClass}">
              <img src="${
                singleAlbum.cover_medium
              }" class="card-img-top" alt="Album" />
              <div class="card-body">
                <h6 class="card-title">${singleAlbum.title}</h6>
                <p class="card-text">${singleAlbum.contributors[0].name}</p>
              </div>
            </div>
          </div>
          </a>
        `
        )
      })
    })
    .catch((error) => {
      alert(error)
    })
}

const albumsArea2 = document.getElementById('albums2')
const albumsArea1 = document.getElementById('albums1')
const mainSection = document.getElementById('mainSection')
const rightSection = document.getElementById('rightSection')
const closeFriends = document.getElementById('closeFriends')
const openFriends = document.getElementById('openFriends')

closeFriends.addEventListener('click', function () {
  const cards1 = document.querySelectorAll('#albums1 .card')
  const lastCard1 = cards1[cards1.length - 1]
  const cards2 = document.querySelectorAll('#albums2 .card')
  const lastCard2 = cards2[cards2.length - 1]
  console.log('Close friends activity')
  mainSection.classList.remove('col-xl-8')
  mainSection.classList.add('col-xl-10')
  rightSection.classList.add('d-xl-none')
  openFriends.classList.remove('d-none')
  albumsArea1.classList.replace('row-cols-5', 'row-cols-6')
  albumsArea2.classList.replace('row-cols-5', 'row-cols-6')
  lastCard1.classList.remove('d-none')
  lastCard2.classList.remove('d-none')
})

openFriends.addEventListener('click', function () {
  const cards1 = document.querySelectorAll('#albums1 .card')
  const lastCard1 = cards1[cards1.length - 1]
  const cards2 = document.querySelectorAll('#albums2 .card')
  const lastCard2 = cards2[cards2.length - 1]
  console.log('Open friends activity')
  mainSection.classList.remove('col-xl-10')
  mainSection.classList.add('col-xl-8')
  rightSection.classList.remove('d-xl-none')
  openFriends.classList.add('d-none')
  albumsArea1.classList.replace('row-cols-6', 'row-cols-5')
  albumsArea2.classList.replace('row-cols-6', 'row-cols-5')
  lastCard1.classList.add('d-none')
  lastCard2.classList.add('d-none')
})

generateAlbumsRow1(albums1)
generateAlbumsRow2(albums2)

// Event listener per il bottone Play dell'hero: apre la pagina dell'album Mercury degli Imagine Dragons
const heroPlayBtn = document.getElementById('heroPlayBtn')
if (heroPlayBtn) {
  heroPlayBtn.addEventListener('click', function () {
    // Reindirizza alla pagina album.html con l'id corretto di Mercury (Acts 1 & 2) degli Imagine Dragons
    window.location.href = 'album.html?id=331818647'
  })
}

const toggleAlbumsBtn1 = document.getElementById('toggleAlbums1')
const albumsRow1 = document.getElementById('albums1')
const toggleAlbumsBtn2 = document.getElementById('toggleAlbums2')
const albumsRow2 = document.getElementById('albums2')

const hideSectionToggle = function (button, row) {
  button.addEventListener('click', () => {
    row.classList.toggle('d-none')

    if (row.classList.contains('d-none')) {
      button.textContent = 'MOSTRA SEZIONE'
    } else {
      button.textContent = 'NASCONDI SEZIONE'
    }
  })
}

hideSectionToggle(toggleAlbumsBtn1, albumsRow1)
hideSectionToggle(toggleAlbumsBtn2, albumsRow2)
