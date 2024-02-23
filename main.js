const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Helipa",
    name: "Yago Oproprio",
    source:
      "mp/Yago Oproprio - Helipa (Prod l West City_ Du. C) (Áudio Oficial)_KFp3PHmchks.mp3",
  },
  {
    title: "No Piscar Dos Olhos",
    name: "Febre90s, pumapjl, SonoTWS, Lis Mc",
    source:
      "mp/Febre90's - No Piscar dos Olhos (Feat. Lis Mc)_LqDIKJ8pq8Q.mp3",
  },
  {
    title: "redrum",
    name: "21 Savage",
    source:
      "mp/21 Savage - redrum (Official Audio)_ukbiRcyzrpc.mp3",
  },
  {
    title: "Over the Rainbow",
    name: "Israel Kamakawiwo'ole",
    source:
      "mp/OFFICIAL Somewhere over the Rainbow - Israel _IZ_ Kamakawiwoʻole_V1bFr2SWP1I.mp3",
  },
  {
    title: "Sunflower",
    name: "Post Malone, Swae Lee",
    source:
      "mp/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse)_ApXoWvfEYVU.mp3",
  },

  {
    title: "SICKO MODE",
    name: "Travis Scott",
    source:
      "mp/Travis Scott - SICKO MODE (Audio)_d-JBBNg8YKs.mp3",
  },
  {
    title: "Los Pollos Hermanos",
    name: "Knucks",
    source:
      "mp/Knucks - Los Pollos Hermanos (Official Music Video)_zSRFc8T64w8.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});