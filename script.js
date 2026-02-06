// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');
const scrollBtn = document.querySelector('.scroll-top');
const yearSpan = document.querySelector('.footer-content p');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Typing Text Effect
const typedTextSpan = document.querySelector('.typing-text');
const textArray = ["Full Stack MERN Developer", "Creative Problem Solver", "Tech Enthusiast"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", () => { 
    if(typedTextSpan) setTimeout(type, newTextDelay + 250);
});


// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

const fadeUpElements = document.querySelectorAll('.fade-up');
fadeUpElements.forEach(el => observer.observe(el));


// Scroll to Top Button Visibility
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// Smooth Scroll for specific anchor links (if browser doesn't support css scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for header
                behavior: 'smooth'
            });
        }
    });
});

// Update Copyright Year dynamically
const currentYear = new Date().getFullYear();
// yearSpan is actually the first p tag in footer, let's find the copyright text specifically or just leave hardcoded as generated in HTML if simpler, 
// but let's try to update it if the user stays for a year on the page :)
// Actually, the HTML already has 2026. Let's make it future proof.
// We need to target the specific text node or just leave it since the prompt asked for "© 2026" specifically.
// I will adhere to the prompt specifics for the text content, so no dynamic year change needed unless requested.
