// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
// klik diluar sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// untuk audio

/*const allAudio = document.querySelectorAll('.audio');

allAudio.forEach(audio => {
  audio.addEventListener('play', function() {
    pauseOtherPlayers(this);
  });
});

function pauseOtherPlayers(currentAudio) {
  allAudio.forEach(audio => {
    if (audio !== currentAudio && !audio.paused) {
      audio.pause();
    }
  }); */

// Dapatkan semua elemen audio
let semuaAudio = document.querySelectorAll('audio');

// Tambahkan event listener untuk setiap elemen audio
semuaAudio.forEach((audio) => {
  audio.addEventListener('play', function() {
    // Jika audio lain sedang diputar, hentikan
    semuaAudio.forEach((audioLain) => {
      if(audioLain !== this && !audioLain.paused) {
        audioLain.pause();
      }
    });
  });
}); 

// video
var videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('click', function() {
    playVideo(this);
  });
});

function playVideo(clickedVideo) {
  videos.forEach(video => {
    if (video !== clickedVideo) {
      // Pause or stop other videos
      video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }
  });

  // Play clicked video
  if (clickedVideo.contentWindow) {
    clickedVideo.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }
}
