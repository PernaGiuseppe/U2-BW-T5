const playlists = [
  {
    id: 1,
    titl: "Playlist Rock",
    description: "Una selezione dei migliori brani rock.",
    songs: 42,
    image: "./assets/imgs/main/image-3.jpg",
    tracks: [
      { title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
      { title: "Back in Black", artist: "AC/DC", duration: "4:15" },
      { title: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: "5:56" },
      { title: "Hotel California", artist: "Eagles", duration: "6:30" },
      { title: "Smoke on the Water", artist: "Deep Purple", duration: "5:40" },
      { title: "Highway to Hell", artist: "AC/DC", duration: "3:28" },
      { title: "Born to Be Wild", artist: "Steppenwolf", duration: "3:30" },
      { title: "Enter Sandman", artist: "Metallica", duration: "5:32" },
      { title: "Paradise City", artist: "Guns N' Roses", duration: "6:45" },
      { title: "Whole Lotta Love", artist: "Led Zeppelin", duration: "5:34" }
    ]
  },
  {
    id: 2,
    titl: "Playlist Chill",
    description: "Musica rilassante per ogni momento.",
    songs: 35,
    image: "./assets/imgs/main/image-4.jpg",
    tracks: [
      { title: "Sunset Lover", artist: "Petit Biscuit", duration: "3:58" },
      { title: "Weightless", artist: "Marconi Union", duration: "8:00" },
      { title: "Night Owl", artist: "Galimatias", duration: "3:55" },
      { title: "Cold Little Heart", artist: "Michael Kiwanuka", duration: "9:58" },
      { title: "Lost in Japan", artist: "Shawn Mendes", duration: "3:21" },
      { title: "Lovely", artist: "Billie Eilish & Khalid", duration: "3:20" },
      { title: "Ocean Eyes", artist: "Billie Eilish", duration: "3:20" },
      { title: "Location", artist: "Khalid", duration: "3:39" },
      { title: "Talk", artist: "Khalid", duration: "3:17" },
      { title: "Better", artist: "Khalid", duration: "3:49" }
    ]
  },
  {
    id: 3,
    titl: "Playlist Rock",
    description: "Una selezione dei migliori brani rock.",
    songs: 42,
    image: "./assets/imgs/main/image-5.jpg",
    tracks: [
      { title: "Paint It Black", artist: "The Rolling Stones", duration: "3:45" },
      { title: "Come As You Are", artist: "Nirvana", duration: "3:38" },
      { title: "Seven Nation Army", artist: "The White Stripes", duration: "3:52" },
      { title: "Californication", artist: "Red Hot Chili Peppers", duration: "5:21" },
      { title: "Creep", artist: "Radiohead", duration: "3:58" },
      { title: "Karma Police", artist: "Radiohead", duration: "4:21" },
      { title: "Black", artist: "Pearl Jam", duration: "5:43" },
      { title: "Everlong", artist: "Foo Fighters", duration: "4:10" },
      { title: "No One Knows", artist: "Queens of the Stone Age", duration: "4:38" },
      { title: "My Hero", artist: "Foo Fighters", duration: "4:20" }
    ]
  },
  {
    id: 4,
    titl: "Playlist Chill",
    description: "Musica rilassante per ogni momento.",
    songs: 35,
    image: "./assets/imgs/main/image-6.jpg",
    tracks: [
      { title: "Bloom", artist: "ODESZA", duration: "3:40" },
      { title: "Intro", artist: "The xx", duration: "2:07" },
      { title: "Electric", artist: "Alina Baraz feat. Khalid", duration: "3:45" },
      { title: "Get You", artist: "Daniel Caesar", duration: "4:38" },
      { title: "Pink + White", artist: "Frank Ocean", duration: "3:04" },
      { title: "Retrograde", artist: "James Blake", duration: "3:43" },
      { title: "Lost", artist: "Frank Ocean", duration: "3:54" },
      { title: "Sunflower", artist: "Post Malone", duration: "2:38" },
      { title: "Better Together", artist: "Jack Johnson", duration: "3:27" },
      { title: "Banana Pancakes", artist: "Jack Johnson", duration: "3:12" }
    ]
  },
  {
    id: 5,
    titl: "Playlist Rock",
    description: "Una selezione dei migliori brani rock.",
    songs: 42,
    image: "./assets/imgs/main/image-7.jpg",
    tracks: [
      { title: "Welcome to the Jungle", artist: "Guns N' Roses", duration: "4:31" },
      { title: "The Pretender", artist: "Foo Fighters", duration: "4:29" },
      { title: "Chop Suey!", artist: "System of a Down", duration: "3:30" },
      { title: "Toxicity", artist: "System of a Down", duration: "3:39" },
      { title: "B.Y.O.B.", artist: "System of a Down", duration: "4:15" },
      { title: "In the End", artist: "Linkin Park", duration: "3:36" },
      { title: "Numb", artist: "Linkin Park", duration: "3:05" },
      { title: "Somebody Told Me", artist: "The Killers", duration: "3:17" },
      { title: "Mr. Brightside", artist: "The Killers", duration: "3:43" },
      { title: "Sex on Fire", artist: "Kings of Leon", duration: "3:23" }
    ]
  },
  {
    id: 6,
    titl: "Playlist Chill",
    description: "Musica rilassante per ogni momento.",
    songs: 35,
    image: "./assets/imgs/main/image-8.jpg",
    tracks: [
      { title: "River", artist: "Leon Bridges", duration: "3:59" },
      { title: "Breathe Me", artist: "Sia", duration: "4:35" },
      { title: "Tenerife Sea", artist: "Ed Sheeran", duration: "4:00" },
      { title: "All I Want", artist: "Kodaline", duration: "5:05" },
      { title: "Skinny Love", artist: "Bon Iver", duration: "3:58" },
      { title: "Holocene", artist: "Bon Iver", duration: "5:36" },
      { title: "Re: Stacks", artist: "Bon Iver", duration: "6:41" },
      { title: "Photograph", artist: "Ed Sheeran", duration: "4:18" },
      { title: "Let It Go", artist: "James Bay", duration: "4:21" },
      { title: "Say You Won't Let Go", artist: "James Arthur", duration: "3:31" }
    ]
  }
];

  //  Recupera l'ID dalla query string (?id=6)
  const urlParams = new URLSearchParams(window.location.search);
  const playlistId = parseInt(urlParams.get("id"));

 const playlist = playlists.find(p => p.id === playlistId);

  if (playlist) {
    document.getElementById("titl").textContent = playlist.titl;
    document.getElementById("description").textContent = playlist.description;
    document.getElementById("image").src = playlist.image;
    document.getElementById("songs").textContent = `Contiene ${playlist.songs} brani`;
  } else {
    document.body.innerHTML = "Playlist non trovata.";
  }


  //  Trova la playlist giusta
  const selectedPlaylist = playlists.find(pl => pl.id === playlistId);

  const container = document.getElementById("tracks-container");

  //  Inserisci i brani
  if (selectedPlaylist) {
    selectedPlaylist.tracks.forEach((track, index) => {
      const row = document.createElement("div");
      row.className = "row align-items-center p-3 border-bottom border-secondary border-opacity-10 track-item";
      row.innerHTML = `
        <div class="col-1 text-center text-white-50">${index + 1}</div>
        <div class="col-6">
          <div class="fw-normal text-white">${track.title}</div>
          <small class="text-white-50">${track.artist}</small>
        </div>
        <div class="col-3 text-end text-white-50">${selectedPlaylist.title}</div>
        <div class="col-2 text-end text-white-50">${track.duration}</div>
      `;
      container.appendChild(row);
    });
  } else {
    container.innerHTML = `
      <div class="text-center text-white p-4">
        Playlist non trovata.
      </div>
    `;
  }

 

