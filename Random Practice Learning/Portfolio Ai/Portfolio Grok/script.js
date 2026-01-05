// script.js

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navList.classList.toggle("active");
});

// Close menu when clicking a link
navList.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navList.classList.remove("active");
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll Indicator Animation (already in CSS, no JS needed)

// Parallax Effect for Hero Background
const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Intersection Observer for Fade-In Animations
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.1,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach((section) => {
  section.classList.add("fade-in");
  observer.observe(section);
});

// Add to CSS: .fade-in { opacity: 0; transform: translateY(50px); transition: all 0.8s ease; } .fade-in.visible { opacity: 1; transform: translateY(0); }

// Portfolio Slider
class Slider {
  constructor(sliderSelector) {
    this.slider = document.querySelector(sliderSelector);
    this.items = this.slider.querySelectorAll(
      ".portfolio-item, .testimonial-item"
    );
    this.currentIndex = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.init();
  }

  init() {
    this.slider.addEventListener("touchstart", (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    });

    this.slider.addEventListener("touchend", (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });

    // Auto slide every 5 seconds
    this.autoSlide = setInterval(() => this.next(), 5000);
  }

  handleSwipe() {
    if (this.touchStartX - this.touchEndX > 50) {
      this.next();
    } else if (this.touchEndX - this.touchStartX > 50) {
      this.prev();
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.scrollToCurrent();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.scrollToCurrent();
  }

  scrollToCurrent() {
    const itemWidth = this.items[0].offsetWidth + 20; // including gap
    this.slider.scrollTo({
      left: this.currentIndex * itemWidth,
      behavior: "smooth",
    });
  }
}

new Slider(".portfolio-slider");
new Slider(".testimonials-slider");

// Contact Form Validation and Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const message = contactForm.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Simulate AJAX submission
  console.log("Form submitted:", { name, email, message });
  alert("Message sent successfully!");
  contactForm.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Lazy Loading Images
document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("loading", "lazy");
});

// Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

// Add to CSS: .back-to-top { position: fixed; bottom: 20px; right: 20px; padding: 10px 15px; background: #007bff; color: #fff; border: none; border-radius: 50%; cursor: pointer; opacity: 0; transition: opacity 0.3s; } .back-to-top.visible { opacity: 1; }

// Preloader (optional high-end feature)
window.addEventListener("load", () => {
  const preloader = document.createElement("div");
  preloader.classList.add("preloader");
  document.body.appendChild(preloader);
  setTimeout(() => preloader.classList.add("hidden"), 1000);
});

// Add to CSS: .preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #fff; display: flex; align-items: center; justify-content: center; z-index: 2000; transition: opacity 0.5s; } .preloader::before { content: 'Loading...'; font-size: 2rem; } .preloader.hidden { opacity: 0; pointer-events: none; }

// Dark Mode Toggle (modern feature)
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "🌙";
darkModeToggle.classList.add("dark-mode-toggle");
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.innerText = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

// Add to CSS: .dark-mode-toggle { position: fixed; top: 20px; right: 20px; padding: 10px; background: #fff; border: none; cursor: pointer; } body.dark-mode { background: #121212; color: #fff; } body.dark-mode .header { background: rgba(18, 18, 18, 0.95); } /* Add more dark mode styles as needed */

// Service Card Animations
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Console log for debugging
console.log("Script loaded successfully.");
