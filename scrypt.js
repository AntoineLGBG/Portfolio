document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = items.length - 1;
        } else {
            currentIndex--;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex === items.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * carouselInner.clientWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
    }
});

