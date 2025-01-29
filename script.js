// Smooth Scroll
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: "smooth"
    });
}

// Testimonial Slider
window.onload = () => {
    const slider = document.querySelector('.testimonial-slider');
    let scrollAmount = 0;
    const slideInterval = setInterval(() => {
        scrollAmount += slider.offsetWidth * 0.8;
        if (scrollAmount >= slider.scrollWidth) {
            scrollAmount = 0;
        }
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }, 4000);
};
