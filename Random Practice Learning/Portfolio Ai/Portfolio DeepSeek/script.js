// ===== Main Application =====
class CodeAurChaiApp {
  constructor() {
    this.init();
  }

  init() {
    // Initialize all components
    this.loadingScreen = new LoadingScreen();
    this.navigation = new Navigation();
    this.hero = new HeroSection();
    this.services = new ServicesSection();
    this.portfolio = new PortfolioSection();
    this.education = new EducationSection();
    this.contact = new ContactSection();
    this.footer = new Footer();
    this.backToTop = new BackToTop();

    // Initialize global event listeners
    this.initGlobalEvents();

    console.log("🚀 Code Aur Chai - Premium Website Initialized");
  }

  initGlobalEvents() {
    // Page load complete
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.loadingScreen.hide();
      }, 2000);
    });

    // Handle page visibility changes
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        this.hero.restartAnimations();
      }
    });

    // Handle resize events with debounce
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.portfolio.handleResize();
      }, 250);
    });
  }
}

// ===== Loading Screen =====
class LoadingScreen {
  constructor() {
    this.loadingScreen = document.getElementById("loading-screen");
    this.loaderProgress = document.querySelector(".loader-progress");
    this.init();
  }

  init() {
    this.animateProgress();
  }

  animateProgress() {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        return;
      }
      width += 2;
      this.loaderProgress.style.width = `${width}%`;
    }, 30);
  }

  hide() {
    this.loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      this.loadingScreen.style.display = "none";
    }, 500);
  }
}

// ===== Navigation =====
class Navigation {
  constructor() {
    this.navbar = document.querySelector(".navbar");
    this.hamburger = document.querySelector(".hamburger");
    this.navMenu = document.querySelector(".nav-menu");
    this.navLinks = document.querySelectorAll(".nav-link");
    this.init();
  }

  init() {
    this.handleScroll();
    this.handleHamburger();
    this.handleNavLinks();
    this.handleNavScroll();
  }

  handleScroll() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.navbar.classList.add("scrolled");
      } else {
        this.navbar.classList.remove("scrolled");
      }
    });
  }

  handleHamburger() {
    this.hamburger.addEventListener("click", () => {
      this.hamburger.classList.toggle("active");
      this.navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !this.navbar.contains(e.target) &&
        this.navMenu.classList.contains("active")
      ) {
        this.hamburger.classList.remove("active");
        this.navMenu.classList.remove("active");
      }
    });
  }

  handleNavLinks() {
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // Close mobile menu if open
          this.hamburger.classList.remove("active");
          this.navMenu.classList.remove("active");

          // Smooth scroll to section
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  handleNavScroll() {
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          this.navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }
}

// ===== Hero Section =====
class HeroSection {
  constructor() {
    this.hero = document.querySelector(".hero");
    this.stats = document.querySelectorAll(".stat-number");
    this.floatingCards = document.querySelectorAll(".floating-card");
    this.codeSnippets = document.querySelectorAll(".code-snippet");
    this.init();
  }

  init() {
    this.animateStats();
    this.enhanceFloatingCards();
    this.enhanceCodeSnippets();
    this.createParticles();
  }

  animateStats() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.stats.forEach((stat) => {
              this.animateCounter(stat);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(this.hero);
  }

  animateCounter(element) {
    const target = parseInt(element.getAttribute("data-count"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent =
          target + (element.getAttribute("data-count") === "98" ? "%" : "+");
        clearInterval(timer);
      } else {
        element.textContent =
          Math.floor(current) +
          (element.getAttribute("data-count") === "98" ? "%" : "+");
      }
    }, 16);
  }

  enhanceFloatingCards() {
    this.floatingCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-20px) scale(1.05)";
        card.style.zIndex = "10";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
        card.style.zIndex = "";
      });
    });
  }

  enhanceCodeSnippets() {
    this.codeSnippets.forEach((snippet) => {
      snippet.addEventListener("mouseenter", () => {
        snippet.style.color = "rgba(99, 102, 241, 0.3)";
        snippet.style.transform = "scale(1.2)";
      });

      snippet.addEventListener("mouseleave", () => {
        snippet.style.color = "";
        snippet.style.transform = "";
      });
    });
  }

  createParticles() {
    // Create floating particles in hero background
    const particlesContainer = document.querySelector(".hero-background");
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--primary);
                border-radius: 50%;
                opacity: 0.3;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float-particle ${
                  10 + Math.random() * 20
                }s infinite linear;
            `;
      particlesContainer.appendChild(particle);
    }

    // Add particle animation to CSS
    const style = document.createElement("style");
    style.textContent = `
            @keyframes float-particle {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.3;
                }
                90% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }

  restartAnimations() {
    // Restart animations when page becomes visible again
    this.floatingCards.forEach((card) => {
      card.style.animation = "none";
      setTimeout(() => {
        card.style.animation = "";
      }, 10);
    });
  }
}

// ===== Services Section =====
class ServicesSection {
  constructor() {
    this.serviceCards = document.querySelectorAll(".service-card");
    this.serviceButtons = document.querySelectorAll(".btn-service");
    this.init();
  }

  init() {
    this.enhanceServiceCards();
    this.handleServiceButtons();
    this.createServiceObserver();
  }

  enhanceServiceCards() {
    this.serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });

      // Add tilt effect
      this.addTiltEffect(card);
    });
  }

  addTiltEffect(element) {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = (x - centerX) / 25;
      const rotateX = (centerY - y) / 25;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(-10px)";
    });
  }

  handleServiceButtons() {
    this.serviceButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const serviceCard = button.closest(".service-card");
        const serviceName = serviceCard.querySelector("h3").textContent;

        this.showServiceModal(serviceName);
      });
    });
  }

  showServiceModal(serviceName) {
    // Create modal for service details
    const modal = document.createElement("div");
    modal.className = "service-modal";
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>${serviceName} - Detailed Information</h3>
                <p>This is where detailed information about ${serviceName} would appear. We can include pricing, timelines, case studies, and more.</p>
                <div class="modal-actions">
                    <button class="btn-primary">Get Quote</button>
                    <button class="btn-secondary">View Case Studies</button>
                </div>
            </div>
        `;

    modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

    document.body.appendChild(modal);

    // Animate in
    setTimeout(() => {
      modal.style.opacity = "1";
    }, 10);

    // Close modal handlers
    const closeModal = () => {
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.remove();
      }, 300);
    };

    modal.querySelector(".close-modal").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  createServiceObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 0.6s ease forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.serviceCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      observer.observe(card);
    });

    // Add fadeInUp animation
    const style = document.createElement("style");
    style.textContent = `
            @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
    document.head.appendChild(style);
  }
}

// ===== Portfolio Section =====
class PortfolioSection {
  constructor() {
    this.filterButtons = document.querySelectorAll(".filter-btn");
    this.portfolioItems = document.querySelectorAll(".portfolio-item");
    this.portfolioButtons = document.querySelectorAll(".btn-portfolio");
    this.init();
  }

  init() {
    this.handleFiltering();
    this.handlePortfolioButtons();
    this.createPortfolioObserver();
  }

  handleFiltering() {
    this.filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Update active button
        this.filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter items
        const filter = button.getAttribute("data-filter");

        this.portfolioItems.forEach((item) => {
          if (
            filter === "all" ||
            item.getAttribute("data-category") === filter
          ) {
            item.style.display = "block";
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "scale(1)";
            }, 10);
          } else {
            item.style.opacity = "0";
            item.style.transform = "scale(0.8)";
            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }

  handlePortfolioButtons() {
    this.portfolioButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const portfolioItem = button.closest(".portfolio-item");
        const title = portfolioItem.querySelector("h3").textContent;
        const description = portfolioItem.querySelector("p").textContent;

        this.showPortfolioModal(title, description);
      });
    });
  }

  showPortfolioModal(title, description) {
    const modal = document.createElement("div");
    modal.className = "portfolio-modal";
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="modal-gallery">
                    <div class="gallery-placeholder">Project Gallery Would Appear Here</div>
                </div>
                <div class="modal-details">
                    <div class="detail-item">
                        <strong>Technologies:</strong> React, Node.js, MongoDB, AWS
                    </div>
                    <div class="detail-item">
                        <strong>Timeline:</strong> 3 months
                    </div>
                    <div class="detail-item">
                        <strong>Results:</strong> 40% increase in user engagement
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-primary">View Live Project</button>
                    <button class="btn-secondary">Download Case Study</button>
                </div>
            </div>
        `;

    modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
            padding: 2rem;
        `;

    document.body.appendChild(modal);

    // Animate in
    setTimeout(() => {
      modal.style.opacity = "1";
    }, 10);

    // Close modal handlers
    const closeModal = () => {
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.remove();
      }, 300);
    };

    modal.querySelector(".close-modal").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    // Escape key to close
    document.addEventListener("keydown", function escapeHandler(e) {
      if (e.key === "Escape") {
        closeModal();
        document.removeEventListener("keydown", escapeHandler);
      }
    });
  }

  createPortfolioObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "slideInUp 0.6s ease forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.portfolioItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(50px)";
      observer.observe(item);
    });

    // Add slideInUp animation
    const style = document.createElement("style");
    style.textContent = `
            @keyframes slideInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
    document.head.appendChild(style);
  }

  handleResize() {
    // Recalculate portfolio grid if needed
    console.log("Portfolio layout updated for new screen size");
  }
}

// ===== Education Section =====
class EducationSection {
  constructor() {
    this.eduStats = document.querySelectorAll(".edu-number");
    this.videoPlaceholder = document.querySelector(".video-placeholder");
    this.eduButtons = document.querySelectorAll(
      ".education-actions .btn-primary, .education-actions .btn-secondary"
    );
    this.init();
  }

  init() {
    this.animateStats();
    this.handleVideoPlaceholder();
    this.handleEducationButtons();
  }

  animateStats() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.eduStats.forEach((stat) => {
              this.animateCounter(stat);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector(".education"));
  }

  animateCounter(element) {
    const target = parseInt(element.getAttribute("data-count"));
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent =
          target +
          (element.getAttribute("data-count") === "50"
            ? "K+"
            : element.getAttribute("data-count") === "10"
            ? "+"
            : "");
        clearInterval(timer);
      } else {
        element.textContent =
          Math.floor(current) +
          (element.getAttribute("data-count") === "50"
            ? "K+"
            : element.getAttribute("data-count") === "10"
            ? "+"
            : "");
      }
    }, 16);
  }

  handleVideoPlaceholder() {
    this.videoPlaceholder.addEventListener("click", () => {
      this.showVideoModal();
    });
  }

  showVideoModal() {
    const modal = document.createElement("div");
    modal.className = "video-modal";
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="video-container">
                    <div class="video-placeholder-large">
                        <i class="fab fa-youtube"></i>
                        <p>YouTube Video Player Would Appear Here</p>
                    </div>
                </div>
                <div class="video-info">
                    <h3>Latest Tutorial: Building Modern Web Applications</h3>
                    <p>Learn how to build scalable web applications using React, Node.js, and modern development practices.</p>
                    <div class="video-stats">
                        <span><i class="fas fa-eye"></i> 15K views</span>
                        <span><i class="fas fa-thumbs-up"></i> 95% liked</span>
                    </div>
                </div>
            </div>
        `;

    modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
            padding: 2rem;
        `;

    document.body.appendChild(modal);

    // Animate in
    setTimeout(() => {
      modal.style.opacity = "1";
    }, 10);

    // Close modal handlers
    const closeModal = () => {
      modal.style.opacity = "0";
      setTimeout(() => {
        modal.remove();
      }, 300);
    };

    modal.querySelector(".close-modal").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  handleEducationButtons() {
    this.eduButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const buttonText = button.textContent.trim();

        if (buttonText.includes("YouTube")) {
          // Simulate YouTube channel opening
          this.showNotification("Opening YouTube Channel...");
        } else {
          // Simulate courses page
          this.showNotification("Exploring Premium Courses...");
        }
      });
    });
  }

  showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 2rem;
            background: var(--gradient);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            z-index: 10001;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(400px)";
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
}

// ===== Contact Section =====
class ContactSection {
  constructor() {
    this.contactForm = document.getElementById("project-form");
    this.formGroups = document.querySelectorAll(".form-group");
    this.socialLinks = document.querySelectorAll(".social-links a");
    this.init();
  }

  init() {
    this.handleForm();
    this.enhanceFormFields();
    this.handleSocialLinks();
  }

  handleForm() {
    this.contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this.contactForm);
      const data = Object.fromEntries(formData);

      // Validate form
      if (this.validateForm(data)) {
        this.submitForm(data);
      }
    });
  }

  validateForm(data) {
    let isValid = true;

    // Reset previous errors
    this.formGroups.forEach((group) => {
      group.classList.remove("error");
    });

    // Check required fields
    if (!data.name.trim()) {
      this.showFieldError("name", "Name is required");
      isValid = false;
    }

    if (!data.email.trim()) {
      this.showFieldError("email", "Email is required");
      isValid = false;
    } else if (!this.isValidEmail(data.email)) {
      this.showFieldError("email", "Please enter a valid email");
      isValid = false;
    }

    if (!data.service) {
      this.showFieldError("service", "Please select a service");
      isValid = false;
    }

    if (!data.message.trim()) {
      this.showFieldError("message", "Please tell us about your project");
      isValid = false;
    }

    return isValid;
  }

  showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const formGroup = field.closest(".form-group");

    formGroup.classList.add("error");

    // Remove existing error message
    const existingError = formGroup.querySelector(".error-message");
    if (existingError) existingError.remove();

    // Add error message
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.8rem;
            margin-top: 0.5rem;
        `;

    formGroup.appendChild(errorElement);
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  submitForm(data) {
    // Show loading state
    const submitButton = this.contactForm.querySelector(
      'button[type="submit"]'
    );
    const originalText = submitButton.textContent;
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
      // Show success message
      this.showSuccessMessage();

      // Reset form
      this.contactForm.reset();

      // Reset button
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  }

  showSuccessMessage() {
    const successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>We'll get back to you within 24 hours. Thank you for choosing Code Aur Chai.</p>
                <button class="btn-primary" onclick="this.closest('.success-message').remove()">Close</button>
            </div>
        `;

    successMessage.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;

    document.body.appendChild(successMessage);
  }

  enhanceFormFields() {
    this.formGroups.forEach((group) => {
      const input = group.querySelector("input, textarea, select");

      // Add focus/blur effects
      input.addEventListener("focus", () => {
        group.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        if (!input.value) {
          group.classList.remove("focused");
        }
      });

      // Check initial value
      if (input.value) {
        group.classList.add("focused");
      }
    });
  }

  handleSocialLinks() {
    this.socialLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const platform = link.querySelector("i").className.split(" ")[1];

        // Simulate social media opening
        this.showNotification(`Opening ${this.getPlatformName(platform)}...`);
      });
    });
  }

  getPlatformName(className) {
    const platforms = {
      "fa-youtube": "YouTube",
      "fa-twitter": "Twitter",
      "fa-linkedin": "LinkedIn",
      "fa-github": "GitHub",
    };
    return platforms[className] || "Social Platform";
  }

  showNotification(message) {
    // Reuse the notification function from EducationSection
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 2rem;
            background: var(--gradient);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            z-index: 10001;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 10);

    setTimeout(() => {
      notification.style.transform = "translateX(400px)";
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
}

// ===== Footer =====
class Footer {
  constructor() {
    this.footerLinks = document.querySelectorAll(".footer-column a");
    this.init();
  }

  init() {
    this.handleFooterLinks();
    this.addCurrentYear();
  }

  handleFooterLinks() {
    this.footerLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // Smooth scroll for internal links
        const href = link.getAttribute("href");
        if (href.startsWith("#")) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          // External links would normally navigate away
          console.log(`Navigating to: ${href}`);
        }
      });
    });
  }

  addCurrentYear() {
    const yearElement = document.querySelector(".footer-bottom p");
    if (yearElement) {
      const currentYear = new Date().getFullYear();
      yearElement.innerHTML = yearElement.innerHTML.replace(
        "2023",
        currentYear
      );
    }
  }
}

// ===== Back to Top =====
class BackToTop {
  constructor() {
    this.button = document.getElementById("back-to-top");
    this.init();
  }

  init() {
    this.handleScroll();
    this.handleClick();
  }

  handleScroll() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        this.button.classList.add("visible");
      } else {
        this.button.classList.remove("visible");
      }
    });
  }

  handleClick() {
    this.button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

// ===== Initialize Application =====
document.addEventListener("DOMContentLoaded", () => {
  new CodeAurChaiApp();
});

// ===== Utility Functions =====
// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Add CSS for additional elements
const additionalStyles = `
    .service-modal .modal-content,
    .portfolio-modal .modal-content,
    .video-modal .modal-content {
        background: white;
        padding: 2rem;
        border-radius: var(--radius);
        max-width: 600px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        box-shadow: var(--shadow-lg);
    }

    .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        background: none;
        border: none;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: var(--transition);
    }

    .close-modal:hover {
        background: var(--gray-light);
    }

    .form-group.error input,
    .form-group.error textarea,
    .form-group.error select {
        border-bottom-color: #ef4444;
    }

    .form-group.focused label {
        top: -0.5rem;
        font-size: 0.8rem;
        color: var(--primary);
    }

    .success-content {
        text-align: center;
        background: white;
        padding: 3rem 2rem;
        border-radius: var(--radius);
        max-width: 400px;
        width: 90%;
    }

    .success-content i {
        font-size: 3rem;
        color: var(--accent);
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        .service-modal .modal-content,
        .portfolio-modal .modal-content,
        .video-modal .modal-content {
            margin: 1rem;
            padding: 1.5rem;
        }
    }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
