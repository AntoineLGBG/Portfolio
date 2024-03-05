

// Sélectionnez la flèche
const scrollToTopButton = document.getElementById('scrollToTop');

// Ajoutez un écouteur d'événements au clic
scrollToTopButton.addEventListener('click', () => {
    // Faites défiler vers le haut de la page avec un effet smooth
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Affichez la flèche lorsque vous faites défiler la page vers le bas
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.opacity = '1';
    } else {
        scrollToTopButton.style.opacity = '0';
    }
});
