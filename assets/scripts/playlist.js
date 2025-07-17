const playlists = [
  {
    id: 1,
    titl: 'Playlist Rock',
    description: 'Una selezione dei migliori brani rock.',
    songs: 42,
    image: './immagini.playlist/maxresdefault.jpg',
    tracks: [
      {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        duration: '5:55',
        album: 'A Night at the Opera',
      },
      {
        title: 'Back in Black',
        artist: 'AC/DC',
        duration: '4:15',
        album: 'Back in Black',
      },
      {
        title: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        duration: '5:56',
        album: 'Appetite for Destruction',
      },
      {
        title: 'Hotel California',
        artist: 'Eagles',
        duration: '6:30',
        album: 'Hotel California',
      },
      {
        title: 'Smoke on the Water',
        artist: 'Deep Purple',
        duration: '5:40',
        album: 'Machine Head',
      },
      {
        title: 'Highway to Hell',
        artist: 'AC/DC',
        duration: '3:28',
        album: 'Highway to Hell',
      },
      {
        title: 'Born to Be Wild',
        artist: 'Steppenwolf',
        duration: '3:30',
        album: 'Steppenwolf',
      },
      {
        title: 'Enter Sandman',
        artist: 'Metallica',
        duration: '5:32',
        album: 'Metallica (Black Album)',
      },
      {
        title: 'Paradise City',
        artist: "Guns N' Roses",
        duration: '6:45',
        album: 'Appetite for Destruction',
      },
      {
        title: 'Whole Lotta Love',
        artist: 'Led Zeppelin',
        duration: '5:34',
        album: 'Led Zeppelin II',
      },
    ],
  },
  {
    id: 2,
    titl: 'Playlist Chill',
    description: 'Musica rilassante per ogni momento.',
    songs: 35,
    image: './immagini.playlist/hq720.jpg',
    tracks: [
      {
        title: 'Sunset Lover',
        artist: 'Petit Biscuit',
        duration: '3:58',
        album: 'Presence',
      },
      {
        title: 'Weightless',
        artist: 'Marconi Union',
        duration: '8:00',
        album: 'Weightless',
      },
      {
        title: 'Night Owl',
        artist: 'Galimatias',
        duration: '3:55',
        album: 'Blowsom EP',
      },
      {
        title: 'Cold Little Heart',
        artist: 'Michael Kiwanuka',
        duration: '9:58',
        album: 'Love & Hate',
      },
      {
        title: 'Lost in Japan',
        artist: 'Shawn Mendes',
        duration: '3:21',
        album: 'Shawn Mendes',
      },
      {
        title: 'Lovely',
        artist: 'Billie Eilish & Khalid',
        duration: '3:20',
        album: 'dont smile at me',
      },
      {
        title: 'Ocean Eyes',
        artist: 'Billie Eilish',
        duration: '3:20',
        album: 'dont smile at me',
      },
      {
        title: 'Location',
        artist: 'Khalid',
        duration: '3:39',
        album: 'American Teen',
      },
      {
        title: 'Talk',
        artist: 'Khalid',
        duration: '3:17',
        album: 'Free Spirit',
      },
      { title: 'Better', artist: 'Khalid', duration: '3:49', album: 'Suncity' },
    ],
  },
  {
    id: 3,
    titl: 'Playlist Pop',
    description: 'Una selezione dei migliori brani Pop.',
    songs: 24,
    image: './immagini.playlist/ab67616d00001e02f2b33e6bcf2ae3325a423d5e.jpg',
    tracks: [
      {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        duration: '3:20',
        album: 'After Hours (2020)',
      },
      {
        title: 'As it Was',
        artist: 'Harry Styles',
        duration: '2:47',
        album: 'Harry’s House (2022)',
      },
      {
        title: 'Anti-Hero',
        artist: 'Taylor Swift',
        duration: '3:20',
        album: 'Midnights (2022)',
      },
      {
        title: 'Levitating',
        artist: 'Dua Lipa',
        duration: '3:23',
        album: 'Future Nostalgia (2020)',
      },
      {
        title: 'Flowers',
        artist: 'Miley Cyrus',
        duration: '3:20',
        album: 'Endless Summer Vacation (2023)',
      },
      {
        title: 'Dont Start Now',
        artist: 'Dua Lipa',
        duration: '3:03',
        album: 'Future Nostalgia (2020)',
      },
      {
        title: 'Peaches',
        artist: 'Justin Bieber feat. Daniel Caesar & Giveon',
        duration: '3:18',
        album: 'Justice (2021)',
      },
      {
        title: 'Shivers',
        artist: 'Ed Sheeran',
        duration: '3:27',
        album: '(Equals) (2021)',
      },
      {
        title: 'good 4 u',
        artist: ' Olivia Rodrigo',
        duration: '2:58',
        album: 'SOUR (2021)',
      },
      {
        title: 'Stay',
        artist: 'The Kid LAROI & Justin Bieber',
        duration: '2:21',
        album: 'F*CK LOVE 3: OVER YOU (2021)',
      },
    ],
  },
  {
    id: 4,
    titl: 'Playlist Classic',
    description: 'Musica rilassante per ogni momento.',
    songs: 35,
    image: './immagini.playlist/ab67616d0000b2739474419f15773875a495eed3.jpg',
    tracks: [
      {
        title: 'Clair de Lune',
        artist: 'Claude Debussy',
        duration: '5:10',
        album: 'Suite Bergamasque (1905)',
      },
      {
        title: 'Nocturne Op. 9 No. 2',
        artist: 'Frédéric Chopin',
        duration: '4:30',
        album: 'Nocturnes, Op. 9 (1832)',
      },
      {
        title: 'Moonlight Sonata (1st Movement)',
        artist: 'Ludwig van Beethoven',
        duration: '5:32',
        album: 'Piano Sonata No. 14 (1801)',
      },
      {
        title: 'The Four Seasons: Spring',
        artist: 'Antonio Vivaldi',
        duration: '3:25',
        album: 'The Four Seasons (1725)',
      },
      {
        title: 'Canon in D',
        artist: 'Johann Pachelbel',
        duration: '6:00',
        album: 'Canon and Gigue in D major (1680s)',
      },
      {
        title: 'Gymnopédie No. 1',
        artist: 'Erik Satie',
        duration: '3:20',
        album: 'Gymnopédies (1888)',
      },
      {
        title: 'Swan Lake (Act II, Scene)',
        artist: 'Pyotr Ilyich Tchaikovsky',
        duration: '3:45',
        album: 'Swan Lake, Op. 20 (1876)',
      },
      {
        title: 'Hungarian Dance No. 5',
        artist: 'Johannes Brahms',
        duration: '2:20',
        album: 'Hungarian Dances (1869)',
      },
      {
        title: 'Eine kleine Nachtmusik',
        artist: 'Wolfgang Amadeus Mozart',
        duration: '5:50',
        album: 'Serenade No. 13, K. 525 (1787)',
      },
      {
        title: 'Adagio for Strings',
        artist: 'Samuel Barber',
        duration: '8:40',
        album: 'Adagio for Strings (1938)',
      },
    ],
  },
  {
    id: 5,
    titl: 'Playlist Tecno',
    description: 'Una selezione dei migliori brani rock.',
    songs: 42,
    image:
      './immagini.playlist/techno-music-album-cover-template-design-54ad7cf78c858c37ba141bb421ac79ee_screen.jpg',
    tracks: [
      {
        title: 'Midnight',
        artist: 'Charlotte de Witte',
        duration: '6:15',
        album: 'Apollo EP (2023)',
      },
      {
        title: 'Acid Eiffel',
        artist: 'Laurent Garnier',
        duration: '13:00',
        album: 'Acid Eiffel (1993)',
      },
      {
        title: 'Your Mind',
        artist: 'Adam Beyer & Bart Skils',
        duration: '8:04',
        album: 'Your Mind (2018)',
      },
      {
        title: 'Age of Love (Charlotte de Witte & Enrico Sangiuliano Remix)',
        artist: 'The Age of Love',
        duration: '8:14',
        album: 'The Age of Love (2021 Remix)',
      },
      {
        title: 'Bang The Acid',
        artist: '999999999',
        duration: '6:08',
        album: 'Live at Kosmos (2020)',
      },
      {
        title: 'Subzero',
        artist: 'Ben Klock',
        duration: '6:46',
        album: 'Subzero EP (2011)',
      },
      {
        title: 'Planet X',
        artist: 'Amelie Lens',
        duration: '6:30',
        album: 'Planet X EP (2019)',
      },
      {
        title: 'Lost',
        artist: 'SHDDR',
        duration: '5:45',
        album: 'Lost (2021)',
      },
      {
        title: 'The Bells',
        artist: 'Jeff Mills',
        duration: '4:47',
        album: 'Waveform Transmission Vol. 1 (1997)',
      },
      {
        title: 'Klockworks 002',
        artist: 'DVS1',
        duration: '6:20',
        album: 'Klockworks 002 (2009)',
      },
    ],
  },
  {
    id: 6,
    titl: 'Playlist Reggeton',
    description: 'Musica rilassante per ogni momento.',
    songs: 35,
    image: './immagini.playlist/400x400bb.jpeg',
    tracks: [
      {
        title: 'Gasolina',
        artist: 'Daddy Yankee',
        duration: '3:13',
        album: 'Barrio Fino (2004)',
      },
      {
        title: 'Despacito',
        artist: 'Luis Fonsi feat. Daddy Yankee',
        duration: '3:47',
        album: 'Vida (2019)',
      },
      {
        title: 'Felices los 4',
        artist: 'Maluma',
        duration: '3:49',
        album: 'F.A.M.E. (2018)',
      },
      {
        title: 'Dákiti',
        artist: 'Bad Bunny & Jhay Cortez',
        duration: '3:25',
        album: 'El Último Tour del Mundo (2020)',
      },
      {
        title: 'Tití Me Preguntó',
        artist: 'Bad Bunny',
        duration: '4:04',
        album: 'Un Verano Sin Ti (2022)',
      },
      {
        title: 'Baila Baila Baila',
        artist: 'Ozuna',
        duration: '3:37',
        album: 'Nibiru (2019)',
      },
      {
        title: 'Criminal',
        artist: 'Natti Natasha & Ozuna',
        duration: '3:53',
        album: 'IlumiNATTI (2019)',
      },
      {
        title: 'Me Porto Bonito',
        artist: 'Bad Bunny & Chencho Corleone',
        duration: '2:58',
        album: 'Un Verano Sin Ti (2022)',
      },
      {
        title: 'Ella y Yo',
        artist: 'Aventura & Don Omar',
        duration: '4:29',
        album: 'God’s Project (2005)',
      },
      {
        title: 'Safaera',
        artist: 'Bad Bunny, Jowell & Randy, Ñengo Flow',
        duration: '4:55',
        album: 'YHLQMDLG (2020)',
      },
    ],
  },
]

//  Recupera l'ID dalla query string (?id=6)
const urlParams = new URLSearchParams(window.location.search)
const playlistId = parseInt(urlParams.get('id'))

const playlist = playlists.find((p) => p.id === playlistId)

if (playlist) {
  document.getElementById('titl').textContent = playlist.titl
  document.getElementById('description').textContent = playlist.description
  document.getElementById('image').src = playlist.image
  document.getElementById(
    'songs'
  ).textContent = `Contiene ${playlist.songs} brani`
} else {
  document.body.innerHTML = 'Playlist non ancora rubata.'
}
//  Trova la playlist giusta
const selectedPlaylist = playlists.find((pl) => pl.id === playlistId)

const container = document.getElementById('tracks-container')


 // Inserisci i brani
if (selectedPlaylist) {
  selectedPlaylist.tracks.forEach((track, index) => {
    const row = document.createElement('div')
    row.className =
      'row align-items-center p-3 border-bottom border-secondary border-opacity-10 track-item'
    row.innerHTML = `
        <div class="col-1 text-center text-white-50">${index + 1}</div>
        <div class="col-6">
          <div class="fw-normal text-white">${track.title}</div>
          <small class="text-white-50">${track.artist}</small>
        </div>
        <div class="col-3 text-end text-white-50">${track.album}</div>
        <div class="col-2 text-end text-white-50">${track.duration}</div>
       `
    container.appendChild(row)
  })
} else {
  container.innerHTML = `
      <div class="text-center text-white p-4">
        Playlist non ancora rubata.
      </div>
    `
}
