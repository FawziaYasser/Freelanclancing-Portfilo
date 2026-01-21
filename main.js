// Initialize AOS Animation Library
AOS.init({
    duration: 1000,
    once: false, // Animations happen every time
    mirror: true, // Animations happen on scroll up as well
    offset: 50,
    easing: 'ease-out-cubic'
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        // Toggle max-height for smooth slide
        if (mobileMenu.classList.contains('max-h-0')) {
            mobileMenu.classList.remove('max-h-0', 'opacity-0');
            mobileMenu.classList.add('max-h-96', 'opacity-100');
            mobileMenu.classList.remove('hidden'); // Ensure it's visible for transition
        } else {
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            mobileMenu.classList.remove('max-h-96', 'opacity-100');
            // Wait for transition to finish before hiding (optional, or just leave opacity 0)
        }

        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('max-h-0')) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            mobileMenu.classList.remove('max-h-96', 'opacity-100');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}

// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky Navbar Background
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-lg', 'bg-dark/95', 'py-3', 'border-primary/20');
        navbar.classList.remove('py-4', 'bg-dark/80', 'border-slate-800');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-dark/95', 'py-3', 'border-primary/20');
        navbar.classList.add('py-4', 'bg-dark/80', 'border-slate-800');
    }
});

// Typewriter Effect
const textElement = document.getElementById('typewriter');
// Phrases as updated by user
const phrases = ["Frontend Developer", "React Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener('DOMContentLoaded', typeWriter);
