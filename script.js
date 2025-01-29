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

// Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
