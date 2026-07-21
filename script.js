/* === GENSKIN — Script.js === */

// ✅ PRELOADER
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 900);
  }
});

// ✅ HEADER SCROLL EFFECT
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// ✅ MOBILE MENU
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  // Close on nav link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

// ✅ SWIPER.JS
const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    576: { slidesPerView: 1.5 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
});

// ✅ COMMANDER VIA WHATSAPP
function commander(produit, numero) {
  if (!numero) return;
  const message = encodeURIComponent(`Bonjour, je souhaite commander le produit suivant : ${produit}`);
  const url = `https://wa.me/${numero}?text=${message}`;
  try {
    window.open(url, "_blank");
  } catch (e) {
    console.error("Erreur WhatsApp:", e);
  }
}

// ✅ FORMULAIRE CONTACT
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Feedback visuel
    const btn = this.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = '✓ Message envoyé !';
    btn.style.background = 'linear-gradient(135deg, #3D7A5A, #2A5C41)';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
    }, 3500);

    this.reset();
  });
}

// ✅ SCROLL ANIMATIONS (Intersection Observer)
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.fade-section').forEach(section => {
  fadeObserver.observe(section);
});

// ✅ SMOOTH SCROLLING pour tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ✅ PARALLAX LÉGER SUR LE HERO
const heroVideo = document.querySelector('.background-video');
if (heroVideo) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroVideo.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  }, { passive: true });
}
