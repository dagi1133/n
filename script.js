// Smooth Scroll
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
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
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 4000);
};

// Form Validation
function validateForm(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
}

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', validateForm);
}
