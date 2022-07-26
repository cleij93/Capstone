const musicContainer = document.querySelector('.music-container');
const  playBtn = document.querySelector('#play');
const  prevBtn = document.querySelector('#prev');
const  nextBtn = document.querySelector('#next');

const  audio = document.querySelector('audio');
const title = document.querySelector('#title');

//Songs 
const songs = ["Don't Bring A Gun to A Knife Fight ft Notions", "Waisting Away", "Dying ft Riverkin"];

//song tracker
let songIndex = 2;

//song loader 
loadSong(songs[songIndex]);

//update song details

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
}

//play song

function playSong() {
musicContainer.classList.add('play');
playBtn.querySelector('i.fas').classList.remove('fa-play');
playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

//PAUSE

function pauseSong() {
musicContainer.classList.remove('play');
playBtn.querySelector('i.fas').classList.add('fa-play');
playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

 //prev song

function prevSong() {
    songIndex--;
    
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// next song
function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

    //change song events

    prevBtn.addEventListener('click', prevSong);

    nextBtn.addEventListener('click', nextSong);

 //song ends
    audio.addEventListener('ended', nextSong);

    //EMAIL BOTS
