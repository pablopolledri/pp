const headerHTML = `
  <header>
    <div class="header-content">
      <div class="logo-text-group">
        <a href="index.html" style="text-decoration: none; color: inherit; display: flex; align-items: center;">
          <img src="https://res.cloudinary.com/ddffqj0du/image/upload/v1752340432/logo_ppk3q0.gif" alt="Logo" class="logo" />
          <div class="header-text">
            <h1>Pablo Polledri</h1>
            <p class="subtitulo">Director / Animator</p>
          </div>
        </a>
      </div>
      <button id="menuToggle" aria-label="Abrir menú">Menu</button>
    </div>

    <div class="header-right">
      <nav class="header-nav">
        <a href="shortfilms.html">Short Films</a>
        <a href="motiongraphics.html">Motion Graphics</a>
        <a href="experiences.html">Experiences</a>
        <a href="illustrations.html">Illustrations</a>
        <a href="contact.html">Contact</a>
        <a href="about.html">About</a>
      </nav>
      <div class="social-icons">
        <a href="https://www.instagram.com/maniacplanet/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/maniacplanet" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </header>

  <nav class="offcanvas-menu" aria-label="Menú móvil">
    <a href="shortfilms.html">Short Films</a>
    <a href="motiongraphics.html">Motion Graphics</a>
    <a href="experiences.html">Experiences</a>
    <a href="illustrations.html">Illustrations</a>
    <a href="contact.html">Contact</a>
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
  document.getElementById('header-container').innerHTML = headerHTML;
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Menú toggle
  const menuToggle = document.getElementById('menuToggle');
  const offcanvasMenu = document.querySelector('.offcanvas-menu');

  menuToggle?.addEventListener('click', () => {
    offcanvasMenu.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en enlace
  const offcanvasLinks = document.querySelectorAll('.offcanvas-menu a');
  offcanvasLinks.forEach(link => {
    link.addEventListener('click', () => {
      offcanvasMenu.classList.remove('active');
    });
  });

  // Cerrar si se hace clic fuera del menú
  document.addEventListener('click', (e) => {
    const clickInside = offcanvasMenu.contains(e.target);
    const clickedToggle = menuToggle.contains(e.target);
    if (!clickInside && !clickedToggle && offcanvasMenu.classList.contains('active')) {
      offcanvasMenu.classList.remove('active');
    }
  });

  // 💡 Video lightbox (sólo si los elementos existen)
  const videoIframe = document.getElementById('videoIframe');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  if (videoIframe && overlay && closeBtn) {
    const videoItems = document.querySelectorAll('.video-item');
    const workItems = document.querySelectorAll('.work-item');

    function openVideo(url) {
      videoIframe.src = url;
      videoIframe.classList.add('active');
      overlay.classList.add('active');
      closeBtn.classList.add('active');
    }

    function closeVideo() {
      videoIframe.src = '';
      videoIframe.classList.remove('active');
      overlay.classList.remove('active');
      closeBtn.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeVideo);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeVideo();
      }
    });

    [...videoItems, ...workItems].forEach(item => {
      item.addEventListener('click', () => openVideo(item.getAttribute('data-video')));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeVideo();
      }
    });
  }
});

// Probar que se adapte el cabezal en forma responsive
function ajustarPaddingTop() {
  const header = document.querySelector('header');
  if (!header) return;
  const altura = header.offsetHeight;
  document.body.style.paddingTop = altura + 'px';
}

window.addEventListener('load', ajustarPaddingTop);
window.addEventListener('resize', ajustarPaddingTop);




