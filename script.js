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
  // ✅ Pour désactiver la navigation (flèches), ne mets pas la propriété
  // Ou laisse-la vide comme ceci :
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
  
  // ✅ Vérifie que la fonction est bien appelée depuis un événement navigateur (ex : clic bouton)
  try {
    window.open(url, "_blank");
  } catch (e) {
    console.error("Erreur lors de l'ouverture de WhatsApp :", e);
  }
}
