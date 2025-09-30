// ✅ Initialisation de Swiper.js
const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: null,
    prevEl: null,
  }
});

// ✅ Fonction pour commander via WhatsApp
function commander(produit, numero) {
  if (!numero) {
    console.error("Numéro manquant pour la commande WhatsApp.");
    return;
  }

  const message = encodeURIComponent(`Bonjour, je souhaite commander le produit suivant : ${produit}`);
  const url = `https://wa.me/${numero}?text=${message}`;

  try {
    window.open(url, "_blank");
  } catch (e) {
    console.error("Erreur lors de l'ouverture de WhatsApp :", e);
  }
}

// ✅ Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Merci ${name}, votre message a été envoyé ! Nous vous répondrons bientôt à ${email}.`);

  this.reset();
});

// ✅ Animations au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observer les sections pour les animations
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Observer les témoignages pour les animations
document.querySelectorAll('.testimonial').forEach(testimonial => {
  observer.observe(testimonial);
});

// ✅ Smooth scrolling pour les liens de navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
