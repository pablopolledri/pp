const overlay = document.getElementById('overlay');
const iframe = document.getElementById('videoIframe');
const closeBtn = document.getElementById('closeBtn');

function closeVideo() {
  iframe.classList.remove('active');
  overlay.classList.remove('active');
  closeBtn.classList.remove('active');
  iframe.src = "";
}

function openVideo(url) {
  iframe.src = url;
  iframe.classList.add('active');
  overlay.classList.add('active');
  closeBtn.classList.add('active');
}

overlay.addEventListener('click', closeVideo);
closeBtn.addEventListener('click', closeVideo);
iframe.addEventListener('click', e => e.stopPropagation());
