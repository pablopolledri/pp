const clickCatcher = document.getElementById('clickCatcher');
const overlay = document.getElementById('overlay');
const iframe = document.getElementById('videoIframe');
const closeBtn = document.getElementById('closeBtn');

function closeVideo() {
  iframe.classList.remove('active');
  overlay.classList.remove('active');
  closeBtn.classList.remove('active');
  clickCatcher.classList.remove('active');
  iframe.src = "";
}

// Mostrar video
function openVideo(url) {
  iframe.src = url;
  iframe.classList.add('active');
  overlay.classList.add('active');
  closeBtn.classList.add('active');
  clickCatcher.classList.add('active');
}

clickCatcher.addEventListener('click', closeVideo);
overlay.addEventListener('click', closeVideo);
closeBtn.addEventListener('click', closeVideo);

// Previene que clicks en iframe propaguen al overlay/clickCatcher
iframe.addEventListener('click', e => e.stopPropagation());
