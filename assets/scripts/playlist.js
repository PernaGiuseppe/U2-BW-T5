const playlists = [
    {
      id: 1,
      title: "Playlist Rock",
      description: "Una selezione dei migliori brani rock.",
      songs: 42,
      image: "./assets/imgs/main/image-3.jpg"
    },
    {
      id: 2,
      title: "Playlist Chill",
      description: "Musica rilassante per ogni momento.",
      songs: 35,
      image: "./assets/imgs/main/image-4.jpg"
    },
    {
      id: 3,
      title: "Playlist Rock",
      description: "Una selezione dei migliori brani rock.",
      songs: 42,
      image: "./assets/imgs/main/image-5.jpg"
    },
    {
      id: 4,
      title: "Playlist Chill",
      description: "Musica rilassante per ogni momento.",
      songs: 35,
      image: "./assets/imgs/main/image-6.jpg"
    },
    {
      id: 5,
      title: "Playlist Rock",
      description: "Una selezione dei migliori brani rock.",
      songs: 42,
      image: "./assets/imgs/main/image-7.jpg"
    },
    {
      id: 6,
      title: "Playlist Chill",
      description: "Musica rilassante per ogni momento.",
      songs: 35,
      image: "./assets/imgs/main/image-8.jpg"
    },
  ];
  // Leggi ID dalla query string
    const params = new URLSearchParams(window.location.search);
    const playlistId = parseInt(params.get("id"));

    const playlist = playlists.find(p => p.id === playlistId);

    if (playlist) {
      document.getElementById("title").textContent = playlist.title;
      document.getElementById("description").textContent = playlist.description;
      document.getElementById("image").src = playlist.image;
      document.getElementById("songs").textContent = `Contiene ${playlist.songs} brani`;
    } else {
      document.body.innerHTML = "Playlist non trovata.";
    }