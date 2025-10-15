function scrollCarousel(carouselId, scrollAmount) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}