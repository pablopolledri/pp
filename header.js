const headerHTML = `
  <header>
    <div class="header-content">
      <img src="img/logo.png" alt="Logo" class="logo" />
      <div class="header-text">
        <h1>Pablo Polledri</h1>
        <p class="subtitulo">Director / Animator</p>
      </div>
    </div>

    <button id="menuToggle" aria-label="Abrir menú">Menu</button>

    <div class="header-right">
      <nav class="header-nav">
        <a href="index.html">Short Films</a>
        <a href="work.html">Work</a>
        <a href="illustrations.html">Illustrations</a>
        <a href="contacto.html">Contacto</a>
        <a href="about.html">About</a>
      </nav>
      <div class="social-icons">
        <a href="https://www.instagram.com/maniacplanet/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/maniacplanet" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </header>

  <nav class="offcanvas-menu" aria-label="Menú móvil">
    <a href="index.html">Short Films</a>
    <a href="work.html">Work</a>
    <a href="illustrations.html">Illustrations</a>
    <a href="contacto.html">Contacto</a>
    <a href="about.html">About</a>
    <div class="offcanvas-social-icons">
      <a href="https://www.instagram.com/maniacplanet/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
      <a href="https://www.youtube.com/maniacplanet" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
    </div>
  </nav>
`;

const footerHTML = `
  <footer class="site-footer">
    <div class="footer-content">
      <p>&copy; 2025 Pablo Polledri. Todos los derechos reservados.</p>
      <div class="footer-links">
        <a href="mailto:contacto@pablopolledri.com">Contacto</a>
        <a href="https://www.instagram.com/maniacplanet/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/maniacplanet" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="privacidad.html">Privacidad</a>
      </div>
    </div>
  </footer>
`;

document.addEventListener('DOMContentLoaded', function () {
  // Inyectar header y footer
  document.getElementById('header-container').innerHTML = headerHTML;
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Menú off-canvas
  const menuToggle = document.getElementById('menuToggle');
  const offcanvasMenu = document.querySelector('.offcanvas-menu');

  menuToggle.addEventListener('click', () => {
    offcanvasMenu.classList.toggle('active');
  });

  const offcanvasLinks = document.querySelectorAll('.offcanvas-menu a');
  offcanvasLinks.forEach(link => {
    link.addEventListener('click', () => {
      offcanvasMenu.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    const clickInsideMenu = offcanvasMenu.contains(e.target);
    const clickOnToggle = menuToggle.contains(e.target);
    if (!clickInsideMenu && !clickOnToggle && offcanvasMenu.classList.contains('active')) {
      offcanvasMenu.classList.remove('active');
    }
  });

  // Video lightbox
  const videoItems = document.querySelectorAll('.video-item');
  const overlay = document.getElementById('overlay');
  const videoIframe = document.getElementById('videoIframe');
  const closeBtn = document.getElementById('closeBtn');

  videoItems.forEach(item => {
    item.addEventListener('click', () => {
      const videoURL = item.getAttribute('data-video');
      videoIframe.src = videoURL;
      videoIframe.classList.add('active');
      overlay.classList.add('active');
      closeBtn.classList.add('active');
    });
  });

  function closeVideo() {
    videoIframe.src = '';
    videoIframe.classList.remove('active');
    overlay.classList.remove('active');
    closeBtn.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeVideo);
  overlay.addEventListener('click', closeVideo);
});

// Video para sección "work"
const workItems = document.querySelectorAll('.work-item');
const overlay = document.getElementById('overlay');
const videoIframe = document.getElementById('videoIframe');
const closeBtn = document.getElementById('closeBtn');

workItems.forEach(item => {
  item.addEventListener('click', () => {
    const videoURL = item.getAttribute('data-video');
    videoIframe.src = videoURL;
    videoIframe.classList.add('active');
    overlay.classList.add('active');
    closeBtn.classList.add('active');
  });

  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      item.click();
    }
  });
});

