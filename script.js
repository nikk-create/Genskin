// Fonction pour commander via WhatsApp
function commanderWhatsApp(produit) {
    const numero = '+2290196150465';
    const message = "Bonjour, je suis intéressé par ce produit : " + produit;
    const url = "https://wa.me/" + numero.replace('+', '') + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}

// Animation simple au scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product').forEach(prod => {
    prod.classList.add('fade-in');
    observer.observe(prod);
});

// Initialisation du slider Swiper
document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});