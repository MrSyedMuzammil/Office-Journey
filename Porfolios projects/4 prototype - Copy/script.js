// --- DATA (Same as before) ---
const portfolioItems = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "web",
    img: "https://placehold.co/800x600/0d1117/c9d1d9?text=Fintech+App",
    desc: "...",
    tags: ["React", "D3.js", "Node.js", "WebSocket", "PostgreSQL"],
    liveUrl: "#",
    details: "...",
  },
  {
    id: 2,
    title: "Event Management Mobile App",
    category: "mobile",
    img: "https://placehold.co/800x600/0d1117/c9d1d9?text=Event+App",
    desc: "...",
    tags: ["React Native", "Firebase", "Push Notifications"],
    liveUrl: "#",
    details: "...",
  },
  {
    id: 3,
    title: "SaaS Platform UI/UX Redesign",
    category: "uiux",
    img: "https://placehold.co/800x600/0d1117/c9d1d9?text=SaaS+UI",
    desc: "...",
    tags: ["Figma", "UI/UX Research", "Design System", "Prototyping"],
    liveUrl: "#",
    details: "...",
  },
];
// ... (rest of the data arrays: services, learningProjects, etc. are the same) ...
const services = [
  { icon: "cpu", title: "Software Development", desc: "..." },
  { icon: "layout", title: "Web Development", desc: "..." },
  { icon: "smartphone", title: "App Development", desc: "..." },
  { icon: "pen-tool", title: "UI/UX Designing", desc: "..." },
  { icon: "trending-up", title: "SEO & Marketing", desc: "..." },
  { icon: "server", title: "Domain & Hosting", desc: "..." },
];
const learningProjects = [
  { title: "CSS Flexbox Visualizer", desc: "...", icon: "box", link: "#" },
  {
    title: "JavaScript Promises Playground",
    desc: "...",
    icon: "zap",
    link: "#",
  },
  { title: "SQL Query Simulator", desc: "...", icon: "database", link: "#" },
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
    desc: "...",
    lang: "TypeScript",
    stars: 1200,
    forks: 85,
    url: "#",
  },
  {
    name: "express-boilerplate",
    desc: "...",
    lang: "JavaScript",
    stars: 850,
    forks: 150,
    url: "#",
  },
  {
    name: "dotfiles",
    desc: "...",
    lang: "Shell",
    stars: 300,
    forks: 45,
    url: "#",
  },
];
const teamMembers = [
  { name: "[Your Name]", role: "Founder & CEO", img: "..." },
  { name: "Jane Doe", role: "Lead Developer", img: "..." },
  { name: "John Smith", role: "UI/UX Designer", img: "..." },
  { name: "Emily White", role: "Project Manager", img: "..." },
];
const icons = {
  cpu: `<svg>...</svg>`,
  layout: `<svg>...</svg>`,
  smartphone: `<svg>...</svg>`,
  "pen-tool": `<svg>...</svg>`,
  "trending-up": `<svg>...</svg>`,
  server: `<svg>...</svg>`,
  box: `<svg>...</svg>`,
  zap: `<svg>...</svg>`,
  database: `<svg>...</svg>`,
  star: `<svg>...</svg>`,
  fork: `<svg>...</svg>`,
};

document.addEventListener("DOMContentLoaded", () => {
  initTyped();
  initScrollReveal(); // This will now handle all elements with `data-wow`
  renderServices();
  renderPortfolio("all");
  renderLearningProjects();
  renderTechStack();
  renderRepositories();
  renderTeam();
  setupEventListeners();
});

// Helper to re-initialize scroll animations after dynamic content is loaded
function refreshScrollReveal() {
  initScrollReveal();
}

// --- DYNAMIC CONTENT RENDERING ---
function renderServices() {
  const grid = document.querySelector(".services-grid");
  if (!grid) return;
  grid.innerHTML = services
    .map(
      (service, index) => `
        <div class="service-card" data-wow style="transition-delay: ${
          index * 100
        }ms;">
            ${icons[service.icon]}
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        </div>
    `
    )
    .join("");
  refreshScrollReveal();
}

function renderPortfolio(filter) {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;
  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);
  grid.innerHTML = filteredItems
    .map(
      (item, index) => `
      <div class="portfolio-card" style="background-image: url('${
        item.img
      }')" onclick="openModal(${item.id})" data-wow style="transition-delay: ${
        index * 100
      }ms;">
          <div class="portfolio-card-content">
              <h3>${item.title}</h3>
              <p>${item.category}</p>
          </div>
      </div>
  `
    )
    .join("");
  refreshScrollReveal();
}

function renderLearningProjects() {
  const grid = document.getElementById("learning-grid");
  if (!grid) return;
  grid.innerHTML = learningProjects
    .map(
      (proj, index) => `
      <div class="learning-card" data-wow style="transition-delay: ${
        index * 100
      }ms;">
          ${icons[proj.icon]}
          <h3>${proj.title}</h3>
          <p>${proj.desc}</p>
          <a href="${
            proj.link
          }" target="_blank" class="btn btn-primary">Launch Interactive Tool</a>
      </div>
  `
    )
    .join("");
  refreshScrollReveal();
}

function renderRepositories() {
  const list = document.getElementById("repo-list");
  if (!list) return;
  list.innerHTML = repositories
    .map(
      (repo, index) => `
      <a href="${
        repo.url
      }" target="_blank" class="repo-card" data-wow style="transition-delay: ${
        index * 100
      }ms;">
          <div class="repo-header">
              <h3>${repo.name}</h3>
              <span class="repo-lang">${repo.lang}</span>
          </div>
          <p>${repo.desc}</p>
          <div class="repo-stats">
              <span>${icons.star} ${repo.stars.toLocaleString()}</span>
              <span>${icons.fork} ${repo.forks.toLocaleString()}</span>
          </div>
      </a>
  `
    )
    .join("");
  refreshScrollReveal();
}

function renderTeam() {
  const grid = document.getElementById("team-grid");
  if (!grid) return;
  grid.innerHTML = teamMembers
    .map(
      (member, index) => `
      <div class="team-member" data-wow style="transition-delay: ${
        index * 100
      }ms;">
          <img src="${member.img}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.role}</p>
      </div>
  `
    )
    .join("");
  refreshScrollReveal();
}
// Unchanged rendering functions
function renderTechStack() {
  const scroller = document.getElementById("tech-scroller");
  const scrollerClone = document.getElementById("tech-scroller-clone");
  const content = technologies
    .map((tech) => `<div class="logo-item"><span>${tech}</span></div>`)
    .join("");
  scroller.innerHTML = content;
  scrollerClone.innerHTML = content;
}

// --- UI & EVENT LISTENERS (Unchanged from previous pure JS version) ---
function setupEventListeners() {
  // ... same event listeners for mobile menu, back-to-top, filters, etc.
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
    formStatus.className = "form-status success";
    contactForm.reset();
    setTimeout(() => (formStatus.textContent = ""), 5000);
  });
}

// --- MODAL LOGIC (Unchanged) ---
const modal = document.getElementById("portfolio-modal");
const modalContent = document.getElementById("modal-content");
function openModal(id) {
  const item = portfolioItems.find((p) => p.id === id);
  modalContent.innerHTML = `...`; // Modal content HTML remains the same
  modal.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
}
window.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());
modal.addEventListener("click", (e) => e.target === modal && closeModal());

// --- ANIMATIONS ---
function initTyped() {
  const typedElement = document.getElementById("typed-text");
  if (!typedElement) return;
  const strings = [
    "Scalable Web Apps.",
    "Intuitive Mobile Apps.",
    "Engaging UI/UX Designs.",
    "Your Vision to Reality.",
  ];
  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentString = strings[stringIndex];
    let typeSpeed = 100;

    if (isDeleting) {
      typedElement.textContent = currentString.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typedElement.textContent = currentString.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentString.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length;
    }
    setTimeout(type, typeSpeed);
  }
  type();
}

// UPDATED: Scroll reveal logic
function initScrollReveal() {
  const revealElements = document.querySelectorAll("[data-wow]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  revealElements.forEach((elem) => {
    // We only observe it if it hasn't been made visible yet
    if (!elem.classList.contains("visible")) {
      observer.observe(elem);
    }
  });
}
