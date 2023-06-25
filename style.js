// Fetch songs by The Weeknd from an API
function fetchSongs() {
    fetch('https://api.example.com/songs') // Replace with the actual API endpoint
      .then(response => response.json())
      .then(data => displaySongs(data.songs))
      .catch(error => console.log(error));
  }
  
  // Function to display songs
  function displaySongs(songs) {
    const songsList = document.querySelector('the weekend.songs-list');
  
    songs.forEach(song => {
      const songElement = document.createElement('div');
      songElement.classList.add('song');
  
      const imageElement = document.createElement('img');
      imageElement.src = song.image;
      imageElement.alt = song.title;
  
      const titleElement = document.createElement('h2');
      titleElement.classList.add('song-title');
      titleElement.textContent = song.title;
  
      songElement.appendChild(imageElement);
      songElement.appendChild(titleElement);
  
      songsList.appendChild(songElement);
    });
  }
  
  // Call the function to fetch and display songs on page load
  window.addEventListener('load', fetchSongs);
  