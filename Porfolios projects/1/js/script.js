// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
      hamburger.classList.toggle("open"); // Optional: for a transformable hamburger icon
    });
  }

  // --- Active Nav Link Highlight ---
  const navLinks = document.querySelectorAll(".navbar ul li a");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (
      currentPath === linkHref ||
      (currentPath === "" && linkHref === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  // --- Basic Form Validation (Contact Page) ---
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      const name = contactForm.elements["name"].value.trim();
      const email = contactForm.elements["email"].value.trim();
      const message = contactForm.elements["message"].value.trim();

      let isValid = true;
      let errorMessage = "";

      if (name === "") {
        isValid = false;
        errorMessage += "Name is required.\n";
      }

      if (email === "") {
        isValid = false;
        errorMessage += "Email is required.\n";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        // Basic email regex
        isValid = false;
        errorMessage += "Please enter a valid email address.\n";
      }

      if (message === "") {
        isValid = false;
        errorMessage += "Message is required.\n";
      }

      if (isValid) {
        // In a real application, you'd send this data to a server (e.g., using fetch API)
        console.log("Form Submitted Successfully!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset(); // Clear the form
      } else {
        alert("Form submission failed:\n" + errorMessage);
      }
    });
  }
});
