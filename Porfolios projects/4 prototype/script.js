// --- DATA ---
const portfolioItems = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "web",
    img: "https://placehold.co/800x600/0d1117/c9d1d9?text=Fintech+App",
    desc: "A real-time financial analytics dashboard for a major investment firm. Built with React, D3.js, and a WebSocket backend for live data streaming. It provides complex data visualizations and reporting tools.",
    tags: ["React", "D3.js", "Node.js", "WebSocket", "PostgreSQL"],
    liveUrl: "#",
    details:
      "This project involved creating a highly performant and secure dashboard to visualize millions of data points in real-time. The challenge was to ensure the UI remained responsive while handling constant data updates.",
  },
  {
    id: 2,
    title: "Event Management Mobile App",
    category: "mobile",
    img: "https://placehold.co/800x600/0d1117/c9d1d9?text=Event+App",
    desc: "A cross-platform mobile app for a conference organizer, featuring schedules, speaker bios, interactive maps, and real-time notifications. Built with React Native.",
    tags: ["React Native", "Firebase", "Push Notifications"],
    liveUrl: "#",
    details:
      "The app serves thousands of attendees, providing a seamless experience. Firebase was used for real-time database updates and push notifications to keep users informed of schedule changes.",
  },
  {
    id: 3,
    title: "SaaS Platform UI/UX Redesign",
    category: "uiux",
    img: "https://placehold.co/800x600/0d1117/c9d1d9?text=SaaS+UI",
    desc: "A complete UI/UX overhaul for a B2B SaaS product. The project involved user research, wireframing, prototyping in Figma, and creating a comprehensive design system.",
    tags: ["Figma", "UI/UX Research", "Design System", "Prototyping"],
    liveUrl: "#",
    details:
      "Through extensive user research and iterative design, we increased user engagement by 40% and reduced onboarding time by half. The new design system ensures brand consistency across the platform.",
  },
];

const learningProjects = [
  {
    title: "CSS Flexbox Visualizer",
    desc: "An interactive tool to visually understand and experiment with all the properties of CSS Flexbox.",
    icon: "box",
    link: "#",
  },
  {
    title: "JavaScript Promises Playground",
    desc: "A hands-on environment to see how Promises work, with examples of chaining, .then(), .catch(), and async/await.",
    icon: "zap",
    link: "#",
  },
  {
    title: "SQL Query Simulator",
    desc: "Learn SQL by writing real queries against a sample database and seeing the results instantly, right in your browser.",
    icon: "database",
    link: "#",
  },
];

const technologies = [
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "PHP",
  "Laravel",
  "Tailwind CSS",
  "Figma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
];

const repositories = [
  {
    name: "nexus-ui-kit",
    desc: "A lightweight, accessible, and customizable component library for React.",
    lang: "TypeScript",
    stars: 1200,
    forks: 85,
    url: "#",
  },
  {
    name: "express-boilerplate",
    desc: "A production-ready boilerplate for building scalable REST APIs with Node.js and Express.",
    lang: "JavaScript",
    stars: 850,
    forks: 150,
    url: "#",
  },
  {
    name: "dotfiles",
    desc: "Our team's shared configuration files for a productive development environment.",
    lang: "Shell",
    stars: 300,
    forks: 45,
    url: "#",
  },
];

const teamMembers = [
  {
    name: "[Your Name]",
    role: "Founder & CEO",
    img: "https://placehold.co/400x400/161b22/c9d1d9?text=CEO",
  },
  {
    name: "Jane Doe",
    role: "Lead Developer",
    img: "https://placehold.co/400x400/161b22/c9d1d9?text=Dev",
  },
  {
    name: "John Smith",
    role: "UI/UX Designer",
    img: "https://placehold.co/400x400/161b22/c9d1d9?text=Designer",
  },
  {
    name: "Emily White",
    role: "Project Manager",
    img: "https://placehold.co/400x400/161b22/c9d1d9?text=PM",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  feather.replace();
  initTyped();
  initParticles();
  initScrollReveal();
  renderPortfolio("all");
  renderLearningProjects();
  renderTechStack();
  renderRepositories();
  renderTeam();
  setupEventListeners();
});

// --- DYNAMIC CONTENT RENDERING ---
function renderPortfolio(filter) {
  const grid = document.getElementById("portfolio-grid");
  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);
  grid.innerHTML = filteredItems
    .map(
      (item) => `
                <div class="portfolio-card group cursor-pointer" style="background-image: url('${item.img}')" onclick="openModal(${item.id})">
                    <div class="portfolio-card-content">
                        <h3 class="text-xl font-bold text-white">${item.title}</h3>
                        <p class="text-gray-400 uppercase text-sm">${item.category}</p>
                    </div>
                </div>
            `
    )
    .join("");
}

function renderLearningProjects() {
  const grid = document.getElementById("learning-grid");
  grid.innerHTML = learningProjects
    .map(
      (proj) => `
                <div class="card-bg p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                    <i data-feather="${proj.icon}" class="h-10 w-10 accent-color mb-4"></i>
                    <h3 class="text-2xl font-bold text-white mb-2">${proj.title}</h3>
                    <p class="text-gray-400 mb-6 flex-grow">${proj.desc}</p>
                    <a href="${proj.link}" target="_blank" class="bg-accent-color text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-sky-400 transition-colors duration-300 text-center">Launch Interactive Tool</a>
                </div>
            `
    )
    .join("");
  feather.replace();
}

function renderTechStack() {
  const scroller = document.getElementById("tech-scroller");
  const scrollerClone = document.getElementById("tech-scroller-clone");
  const content = technologies
    .map((tech) => `<div class="logo-item text-xl"><span>${tech}</span></div>`)
    .join("");
  scroller.innerHTML = content;
  scrollerClone.innerHTML = content;
}

function renderRepositories() {
  const list = document.getElementById("repo-list");
  list.innerHTML = repositories
    .map(
      (repo) => `
                <a href="${
                  repo.url
                }" target="_blank" class="block card-bg p-6 rounded-lg hover:border-accent-color transition-colors duration-300">
                    <div class="flex justify-between items-center">
                        <h3 class="text-xl font-bold accent-color">${
                          repo.name
                        }</h3>
                        <span class="text-xs border border-gray-600 px-2 py-1 rounded-full">${
                          repo.lang
                        }</span>
                    </div>
                    <p class="text-gray-400 mt-2 mb-4">${repo.desc}</p>
                    <div class="flex items-center gap-6 text-gray-400">
                        <span class="flex items-center gap-1"><i data-feather="star" class="w-4 h-4"></i> ${repo.stars.toLocaleString()}</span>
                        <span class="flex items-center gap-1"><i data-feather="git-pull-request" class="w-4 h-4"></i> ${repo.forks.toLocaleString()}</span>
                    </div>
                </a>
            `
    )
    .join("");
  feather.replace();
}

function renderTeam() {
  const grid = document.getElementById("team-grid");
  grid.innerHTML = teamMembers
    .map(
      (member) => `
                <div class="text-center">
                    <img src="${member.img}" alt="${member.name}" class="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gray-700 object-cover">
                    <h3 class="text-xl font-semibold text-white">${member.name}</h3>
                    <p class="text-gray-400">${member.role}</p>
                </div>
            `
    )
    .join("");
}

// --- UI & EVENT LISTENERS ---
function setupEventListeners() {
  // ... (existing listeners for menu, back-to-top, portfolio filters, contact form)
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("hidden")
  );
  mobileMenu
    .querySelectorAll("a")
    .forEach((link) =>
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"))
    );

  const backToTopButton = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backToTopButton.classList.remove("hidden");
    else backToTopButton.classList.add("hidden");
  });
  backToTopButton.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderPortfolio(button.dataset.filter);
    });
  });

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "Message sent successfully!";
    formStatus.className = "text-green-400 mt-4 text-center";
    contactForm.reset();
    setTimeout(() => (formStatus.textContent = ""), 5000);
  });
}

// --- MODAL LOGIC ---
const modal = document.getElementById("portfolio-modal");
const modalContent = document.getElementById("modal-content");

function openModal(id) {
  const item = portfolioItems.find((p) => p.id === id);
  modalContent.innerHTML = `
                <div class="p-8 max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h2 class="text-3xl font-bold text-white">${
                              item.title
                            }</h2>
                            <p class="text-gray-400 uppercase text-sm mt-1">${
                              item.category
                            }</p>
                        </div>
                        <button onclick="closeModal()" class="text-gray-400 hover:text-white text-4xl leading-none">&times;</button>
                    </div>
                    <img src="${item.img}" alt="${
    item.title
  }" class="w-full h-auto object-cover rounded-lg mb-6">
                    <h3 class="text-xl font-semibold text-white mb-2">About this project</h3>
                    <p class="text-gray-300 mb-6">${item.details}</p>
                    <h3 class="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${item.tags
                          .map(
                            (tag) =>
                              `<span class="bg-gray-700 text-sm font-medium px-3 py-1 rounded-full">${tag}</span>`
                          )
                          .join("")}
                    </div>
                    <a href="${
                      item.liveUrl
                    }" target="_blank" class="bg-accent-color text-gray-900 font-bold px-6 py-3 rounded-md hover:bg-sky-400 transition-colors duration-300 inline-block">View Live Project</a>
                </div>
            `;
  modal.classList.remove("opacity-0", "pointer-events-none");
  modalContent.classList.remove("scale-95");
}

function closeModal() {
  modal.classList.add("opacity-0", "pointer-events-none");
  modalContent.classList.add("scale-95");
}

window.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());
modal.addEventListener("click", (e) => e.target === modal && closeModal());

// --- ANIMATION LIBRARIES ---
function initTyped() {
  new Typed("#typed-text", {
    strings: [
      "Scalable Web Apps.",
      "Intuitive Mobile Apps.",
      "Engaging UI/UX Designs.",
      "Your Vision to Reality.",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  });
}

function initParticles() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#58a6ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#58a6ff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
}

function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    delay: 200,
    reset: false,
  });
  sr.reveal("h2, p, .filter-btn");
  sr.reveal(".card-bg, .portfolio-card, #repo-list a, #team-grid div", {
    interval: 100,
  });
}
