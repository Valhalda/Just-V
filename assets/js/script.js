function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Menambahkan atau menghapus kelas 'active'
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' }); // Scroll halus ke bagian tertentu
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('active'); // Menyembunyikan navbar setelah mengklik tautan di mobile
}

let currentSlide = 0; // Start at the first slide
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Wrap around to the first/last slide
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    // Move the slider
    const slider = document.querySelector('.slider');
    const offset = -currentSlide * (slides[0].clientWidth + 16); // 16px is margin
    slider.style.transform = `translateX(${offset}px)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Show the first slide on initial load
showSlide(currentSlide);
