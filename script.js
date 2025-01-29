// Smooth Scroll
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
}

// Testimonial Slider
window.onload = () => {
    const slider = document.querySelector('.testimonial-slider');
    let scrollAmount = 0;
    const slideWidth = slider.offsetWidth; // Use the width of the container

    setInterval(() => {
        scrollAmount += slideWidth;
        if (scrollAmount >= slider.scrollWidth) scrollAmount = 0; // Reset to start when at the end
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 4000); // Slide every 4 seconds
};
