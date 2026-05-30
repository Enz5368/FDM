// Ajoute, supprime ou personnalise tes souvenirs ici.
// Les images vont dans assets/photos/, les videos dans assets/videos/.
const medias = [{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-51-09.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-51-32.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-51-47.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-52-20.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-52-32.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-52-45.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-53-03.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-53-19.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-53-34.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-10-29-23-54-17.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-11-11-12-48-26.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2024-12-07-18-23-21.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-01-05-12-29-51(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-01-05-12-29-51.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-01-22-22-33-05.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-01-22-22-33-32.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-06-10-35-10.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-19-21-01-55.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-19-21-01-56.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-19-21-32-18.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-22-06-23-45.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-22-16-25-53.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-01-47.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-02-01.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-02-28.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-03-08.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-03-19.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-03-32.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-03-41.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-04-18.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-04-35.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-29-19.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-26-16-29-42.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-15-16.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-16-46.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-22-28.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-25-55.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-28-32.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-28-49.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-35-22.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-36-48.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-39-55.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-42-45.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-43-32.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-02-27-16-48-04.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-01-23-17-21.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-14-31-02.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-14-31-52.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-51(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-51.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-52(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-52(2).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-52.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-53(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-53(2).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-53(3).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-53(4).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-03-06-15-19-53.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-05-03-12-33-22.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-05-03-14-11-03.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-05-25-14-26-01.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-05-25-14-26-39.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-06-22-19-50-07.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-06-27-17-33-35.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-06-27-21-21-49.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-19-13-24-33.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-24-14-35-20.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-24-14-35-50.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-24-14-36-11.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-25-19-46-56.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-26-11-05-27.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-26-13-19-54(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-26-13-19-54.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-29-09-26-07.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-31-08-38-18(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-31-08-38-18.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-31-08-38-19(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-07-31-08-38-19.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-03-17-15-38.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-03-17-15-55.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-03-22-45-34.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-15-10-45-37.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-15-10-45-48.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-16-19-11-28.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-17-20-12-50.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-19-09-46-51.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-24-12-19-44.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-26-19-08-58.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-26-22-15-15(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-26-22-15-15.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-08-26-22-15-16.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-10-09-19-17-06.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-10-09-20-30-07.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-10-10-16-51-29.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-10-10-17-57-54.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-01-16-38-46.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-03-16-33-15.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-03-17-36-28.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-22-09-05-11.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-22-16-27-55.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-22-16-59-38.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-22-18-44-10.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-22-18-45-32.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-22-19-55-20.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-26-17-14-28.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-30-14-13-51.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-11-30-14-14-51.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-15-16-27-42.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-25-13.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-25-21.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-25-35.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-36-42.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-37-27.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-47-46.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-47-47(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-47-47(2).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-47-47.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-28-14-47-48.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2025-12-30-07-50-47.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-01-01-00-21-39.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-01-01-00-29-02.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-01-30-21-08-59.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-01-30-23-01-42.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-02-08-18-53-34.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-02-23-16-39-20.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-02-27-14-44-08.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-51-37.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-52-07.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-52-24.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-52-46.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-53-11.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-53-25.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-54-05.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-54-21.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-55-01.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-57-12.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-07-09-57-59.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-11-19-42-55.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-03-11-19-43-06.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-12-13-27-17.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-18-11-49-21.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(10).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(11).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(12).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(13).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(14).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(15).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(16).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(17).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(2).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(3).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(4).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(5).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(6).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(7).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(8).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27(9).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-27.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-28(1).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-28(2).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-28(3).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-28(4).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-28(5).jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-04-27-12-16-28.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-05-20-20-41-06.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-05-20-20-41-47.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-05-20-20-41-54.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-05-20-21-54-38.jpg","caption":"Un souvenir précieux"},{"type":"image","src":"assets/photos/PHOTO-2026-05-25-13-07-54.jpg","caption":"Un souvenir précieux"},{"type":"video","src":"assets/videos/VIDEO-2025-02-19-21-01-55(1).mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-02-19-21-01-55.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-02-19-21-01-56.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-02-26-16-11-14.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-02-26-16-13-06.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-02-26-16-13-49.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-02-26-16-15-03.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-02-26-16-18-55.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-02-26-16-25-27.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-08-29-11-54-43.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-10-09-16-44-08.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2025-12-28-14-46-34.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2026-01-30-16-22-03.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2026-01-30-21-08-59(1).mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2026-01-30-21-08-59.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2026-01-30-21-09-00.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2026-01-30-21-45-28.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2026-01-30-21-52-14.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2026-01-30-22-03-26.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2026-02-22-11-14-51.mp4","caption":"Un moment inoubliable"},{"type":"video","src":"assets/videos/VIDEO-2026-03-31-23-18-07.mp4","caption":"Un moment inoubliable"}];

// Ajoute tes musiques MP3 dans assets/music/, puis complete cette liste si besoin.
const musics = ["assets/music/’O surdato ’nnammurato Luciano Pavarotti and The Corrs live 1998.mp3","assets/music/Gipsy Kings Volare Official Video.mp3","assets/music/L italiano Toto Cutugno Video Ufficiale.mp3","assets/music/Paolo Conte Via Con Me.mp3","assets/music/SARÀ PERCHÉ TI AMO.mp3","assets/music/Tu vuo fa l americano 2007 Remastered.mp3"];

// Les videos d'intro vont dans assets/start/.
const startVideos = ["assets/start/WhatsApp Video 2026-05-30 at 11.42.35 PM.mp4","assets/start/WhatsApp Video 2026-05-31 at 12.34.15 AM.mp4"];

const PHOTO_DURATION = 6500;

const screens = {
  home: document.getElementById("homeScreen"),
  intro: document.getElementById("introScreen"),
  slideshow: document.getElementById("slideshowScreen"),
  final: document.getElementById("finalScreen")
};

const elements = {
  start: document.getElementById("startButton"),
  restart: document.getElementById("restartButton"),
  introFrame: document.getElementById("introFrame"),
  frame: document.getElementById("mediaFrame"),
  counter: document.getElementById("counter"),
  progress: document.getElementById("progressBar"),
  previous: document.getElementById("previousButton"),
  next: document.getElementById("nextButton"),
  pause: document.getElementById("pauseButton"),
  musicToggle: document.getElementById("musicToggleButton"),
  listenMusic: document.getElementById("listenMusicButton"),
  listenVideo: document.getElementById("listenVideoButton"),
  audio: document.getElementById("backgroundMusic")
};

let playlist = [];
let currentIndex = 0;
let currentElement = null;
let photoTimer = null;
let progressTimer = null;
let photoStartedAt = 0;
let photoRemaining = PHOTO_DURATION;
let isPaused = false;
let musicWanted = false;
let currentMusic = "";
let introElement = null;
let introPlaylist = [];
let introIndex = 0;

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-visible"));
  screens[name].classList.add("is-visible");
}

function startSlideshow() {
  playlist = shuffle(medias);
  currentIndex = 0;
  isPaused = false;
  elements.pause.textContent = "Pause";
  showScreen("slideshow");
  if (!musicWanted && musics.length) startRandomMusic();
  showMedia();
}

function startExperience() {
  if (!startVideos.length) {
    startSlideshow();
    return;
  }

  stopIntroVideo();
  stopCurrentMedia();
  if (!elements.audio.paused) elements.audio.pause();

  introPlaylist = shuffle(startVideos);
  introIndex = 0;
  elements.introFrame.innerHTML = "";
  showScreen("intro");
  playNextIntroVideo();
}

function playNextIntroVideo() {
  if (introIndex >= introPlaylist.length) {
    stopIntroVideo();
    startSlideshow();
    return;
  }

  const intro = introPlaylist[introIndex];
  introIndex += 1;
  stopIntroVideo();

  introElement = document.createElement("video");
  introElement.src = intro;
  introElement.controls = true;
  introElement.autoplay = true;
  introElement.playsInline = true;
  introElement.preload = "auto";
  introElement.muted = false;
  introElement.volume = 1;
  introElement.addEventListener("ended", playNextIntroVideo, { once: true });
  introElement.addEventListener("error", playNextIntroVideo, { once: true });

  elements.introFrame.innerHTML = "";
  elements.introFrame.appendChild(introElement);
  introElement.play().catch(() => {});
}

function stopIntroVideo() {
  if (!introElement) return;
  introElement.pause();
  introElement.removeAttribute("src");
  introElement.load();
  introElement = null;
}

function clearMediaTimers() {
  window.clearTimeout(photoTimer);
  window.clearInterval(progressTimer);
  photoTimer = null;
  progressTimer = null;
  elements.progress.style.width = "0%";
}

function stopCurrentMedia() {
  clearMediaTimers();
  if (currentElement?.tagName === "VIDEO") {
    currentElement.pause();
    currentElement.removeAttribute("src");
    currentElement.load();
  }
  currentElement = null;
}

function showMedia() {
  stopCurrentMedia();

  if (!playlist.length) {
    elements.frame.innerHTML = '<p class="loading-text">Ajoute des photos ou videos dans le dossier assets.</p>';
    return;
  }

  if (currentIndex >= playlist.length) {
    showFinalScreen();
    return;
  }

  const item = playlist[currentIndex];
  elements.frame.innerHTML = "";
  elements.counter.textContent = (currentIndex + 1) + " / " + playlist.length;
  elements.previous.disabled = currentIndex === 0;
  elements.next.disabled = false;
  if (item.type === "video") {
    currentElement = createVideo(item);
    elements.frame.appendChild(currentElement);
    preferMusic();
  } else {
    currentElement = createImage(item);
    elements.frame.appendChild(currentElement);
    setSoundButtons(false);
    if (!isPaused) schedulePhotoAdvance(PHOTO_DURATION);
  }

  preloadNextMedia();
}

function createImage(item) {
  const image = new Image();
  image.alt = item.caption || "Souvenir de famille";
  image.decoding = "async";
  image.loading = "eager";
  image.src = item.src;
  return image;
}

function createVideo(item) {
  const video = document.createElement("video");
  video.src = item.src;
  video.controls = true;
  video.autoplay = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.muted = true;
  video.addEventListener("loadedmetadata", () => {
    if (!isPaused) video.play().catch(() => {});
  }, { once: true });
  video.addEventListener("ended", () => {
    preferMusic();
    goNext();
  });
  video.addEventListener("play", () => {
    if (isPaused) togglePause();
  });
  return video;
}

function schedulePhotoAdvance(duration) {
  clearMediaTimers();
  photoRemaining = duration;
  photoStartedAt = Date.now();
  photoTimer = window.setTimeout(goNext, duration);
  progressTimer = window.setInterval(updateProgress, 100);
}

function updateProgress() {
  const elapsed = Date.now() - photoStartedAt;
  const percent = Math.min(100, (elapsed / PHOTO_DURATION) * 100);
  elements.progress.style.width = percent + "%";
}

function preloadNextMedia() {
  const next = playlist[currentIndex + 1];
  if (!next) return;

  if (next.type === "image") {
    const image = new Image();
    image.src = next.src;
    return;
  }

  const video = document.createElement("video");
  video.preload = "metadata";
  video.src = next.src;
}

function goNext() {
  if (currentIndex >= playlist.length - 1) {
    showFinalScreen();
    return;
  }
  currentIndex += 1;
  isPaused = false;
  elements.pause.textContent = "Pause";
  preferMusic();
  showMedia();
}

function goPrevious() {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  isPaused = false;
  elements.pause.textContent = "Pause";
  preferMusic();
  showMedia();
}

function togglePause() {
  isPaused = !isPaused;
  elements.pause.textContent = isPaused ? "Lecture" : "Pause";

  if (currentElement?.tagName === "VIDEO") {
    if (isPaused) currentElement.pause();
    else currentElement.play().catch(() => {});
    return;
  }

  if (isPaused) {
    photoRemaining -= Date.now() - photoStartedAt;
    clearMediaTimers();
  } else {
    schedulePhotoAdvance(Math.max(500, photoRemaining));
  }
}

function showFinalScreen() {
  stopCurrentMedia();
  stopIntroVideo();
  preferMusic();
  showScreen("final");
}

function chooseRandomMusic() {
  if (!musics.length) return "";
  const candidates = musics.filter((track) => track !== currentMusic);
  const pool = candidates.length ? candidates : musics;
  return pool[Math.floor(Math.random() * pool.length)];
}

function startRandomMusic() {
  const nextTrack = chooseRandomMusic();
  if (!nextTrack) return;
  currentMusic = nextTrack;
  elements.audio.src = nextTrack;
  elements.audio.volume = 0.72;
  elements.audio.play().then(() => {
    musicWanted = true;
    elements.musicToggle.textContent = "Couper la musique";
    elements.musicToggle.classList.add("is-active");
  }).catch(() => {
    musicWanted = false;
    elements.musicToggle.textContent = "Lancer la musique";
  });
}

function toggleMusic() {
  if (musicWanted && !elements.audio.paused) {
    musicWanted = false;
    elements.audio.pause();
    elements.musicToggle.textContent = "Lancer la musique";
    elements.musicToggle.classList.remove("is-active");
    return;
  }
  musicWanted = true;
  if (!elements.audio.src) startRandomMusic();
  else elements.audio.play().catch(() => {});
  elements.musicToggle.textContent = "Couper la musique";
  elements.musicToggle.classList.add("is-active");
}

function preferVideoSound() {
  if (currentElement?.tagName !== "VIDEO") return;
  currentElement.muted = false;
  elements.audio.volume = 0.12;
  if (musicWanted && !elements.audio.paused) elements.audio.pause();
  currentElement.play().catch(() => {});
  setSoundButtons(true);
}

function preferMusic() {
  if (currentElement?.tagName === "VIDEO") currentElement.muted = true;
  elements.audio.volume = 0.72;
  if (!elements.audio.src && musics.length) {
    startRandomMusic();
  } else if (musicWanted) {
    elements.audio.play().catch(() => {});
  }
  setSoundButtons(false);
}

function setSoundButtons(videoSoundActive) {
  const isVideo = currentElement?.tagName === "VIDEO";
  elements.listenVideo.disabled = !isVideo;
  elements.listenMusic.disabled = false;
  elements.listenVideo.classList.toggle("is-active", isVideo && videoSoundActive);
  elements.listenMusic.classList.toggle("is-active", !isVideo || !videoSoundActive);
}

elements.start.addEventListener("click", startExperience);
elements.restart.addEventListener("click", startExperience);
elements.previous.addEventListener("click", goPrevious);
elements.next.addEventListener("click", goNext);
elements.pause.addEventListener("click", togglePause);
elements.musicToggle.addEventListener("click", toggleMusic);
elements.listenVideo.addEventListener("click", preferVideoSound);
elements.listenMusic.addEventListener("click", preferMusic);
elements.audio.addEventListener("ended", startRandomMusic);

setSoundButtons(false);
