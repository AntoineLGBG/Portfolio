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

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sidenav.classList.remove("active");
}