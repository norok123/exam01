document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-button');
    const songAudios = document.querySelectorAll('.song-audio');
  
    playButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (songAudios[index].paused) {
          songAudios.forEach(audio => audio.pause());
          songAudios[index].play();
        } else {
          songAudios[index].pause();
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
          const searchInput = document.getElementById('searchInput');
          const searchButton = document.getElementById('searchButton');
          const songItems = document.querySelectorAll('.song-item');
      
          function filterSongs() {
            const searchTerm = searchInput.value.toLowerCase();
            songItems.forEach(songItem => {
              const title = songItem.querySelector('.song-title').innerText.toLowerCase();
              const artist = songItem.querySelector('.song-artist').innerText.toLowerCase();
              if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                songItem.style.display = 'block';
              } else {
                songItem.style.display = 'none';
              }
            });
          }
      
          searchButton.addEventListener('click', filterSongs);
          searchInput.addEventListener('keyup', filterSongs);
        });

        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('searchInput');
            const searchButton = document.getElementById('searchButton');
            const songItems = document.querySelectorAll('.song-item');
            const searchResult = document.getElementById('searchResult');
            
            function filterSongs() {
              const searchTerm = searchInput.value.toLowerCase();
              let count = 0;
              songItems.forEach(songItem => {
                const title = songItem.querySelector('.song-title').innerText.toLowerCase();
                const artist = songItem.querySelector('.song-artist').innerText.toLowerCase();
                if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                  songItem.style.display = 'block';
                  count++;
                } else {
                  songItem.style.display = 'none';
                }
              });
              if (count === 0) {
                searchResult.style.display = 'block';
              } else {
                searchResult.style.display = 'none';
              }
            }
          
            searchButton.addEventListener('click', filterSongs);
            searchInput.addEventListener('keyup', filterSongs);
          });
          
  
        document.addEventListener('DOMContentLoaded', function() {

  const playButtons = document.querySelectorAll('.play-button');

  playButtons.forEach(button => {
    button.addEventListener('click', function() {
      const audio = this.parentElement.querySelector('.song-audio');
      if (audio.paused) {
        audio.play();
        this.textContent = 'Пауза';
      } else {
        audio.pause();
        this.textContent = 'Играть';
      }
    });
  });
});

