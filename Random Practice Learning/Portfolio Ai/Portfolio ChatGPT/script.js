/**
 * script.js
 * Code Aur Chai — interactive behavior
 *
 * Features:
 * - Mobile nav toggle (a11y-friendly)
 * - Portfolio filtering (with CSS class toggles)
 * - Project preview modal (focus trap + a11y)
 * - Animated counters (intersection observer)
 * - Pricing toggle monthly/yearly (reads data attributes)
 * - Contact form validation + fake submit + toast messages
 * - Fade-in on scroll for elements with .fade-in-up
 * - Small UX helpers: smooth scroll for internal links, analytics hook
 *
 * No external libraries — vanilla modern JS (ES6+).
 */

(() => {
  "use strict";

  /* -------------------------
     Helper util functions
     ------------------------- */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const $$ = (selector, ctx = document) =>
    Array.from((ctx || document).querySelectorAll(selector));
  const on = (el, event, handler, opts) =>
    el && el.addEventListener(event, handler, opts);
  const off = (el, event, handler, opts) =>
    el && el.removeEventListener(event, handler, opts);

  const formatNumber = (n) => {
    // Format integer with grouping, no decimals. Example: 1200000 => "1,200,000"
    try {
      return Math.round(Number(n)).toLocaleString("en-US");
    } catch (e) {
      return String(n);
    }
  };

  const announceAnalytics = (payload) => {
    // Lightweight analytics hook — replace with your analytics integration
    // Important: do not expose PII
    try {
      if (window.dataLayer && typeof window.dataLayer.push === "function") {
        window.dataLayer.push(payload);
      } else {
        // Console fallback for development
        // Keep logs non-sensitive
        console.info("[analytics]", payload);
      }
    } catch (e) {
      // swallow
    }
  };

  /* -------------------------
     Toast notifications
     ------------------------- */
  const toastEl = document.getElementById("site-toast");
  let toastTimer = null;
  function showToast(message, { timeout = 4000 } = {}) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.hidden = false;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("show");
      toastTimer = setTimeout(() => (toastEl.hidden = true), 200);
    }, timeout);
  }

  /* -------------------------
     Mobile Nav Toggle
     ------------------------- */
  function initNav() {
    const navToggle = $(".nav-toggle");
    const navList = $("#primary-menu");

    if (!navToggle || !navList) return;

    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navList.classList.toggle("show");
      // Announce for analytics
      announceAnalytics({ event: "nav_toggle", open: !expanded });
    });

    // Close on click outside when open (for small screens)
    document.addEventListener("click", (e) => {
      if (!navList.classList.contains("show")) return;
      const inside = navList.contains(e.target) || navToggle.contains(e.target);
      if (!inside) {
        navList.classList.remove("show");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navList.classList.contains("show")) {
        navList.classList.remove("show");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus();
      }
    });
  }

  /* -------------------------
     Smooth scroll for internal links
     ------------------------- */
  function initSmoothScroll() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[data-link], a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      if (href.startsWith("#")) {
        const dest = document.querySelector(href);
        if (dest) {
          e.preventDefault();
          dest.scrollIntoView({ behavior: "smooth", block: "start" });
          // Manage focus for accessibility
          dest.setAttribute("tabindex", "-1");
          dest.focus({ preventScroll: true });
          window.setTimeout(() => dest.removeAttribute("tabindex"), 1200);
          announceAnalytics({ event: "anchor_click", anchor: href });
        }
      }
    });
  }

  /* -------------------------
     Portfolio filtering
     ------------------------- */
  function initPortfolioFilters() {
    const filterButtons = $$(".filter-btn");
    const items = $$(".portfolio-item");

    if (!filterButtons.length || !items.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const selected = btn.dataset.filter || "all";
        // Update active state
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        items.forEach((item) => {
          const cat = item.dataset.category || "";
          if (selected === "all" || selected === cat) {
            item.style.display = ""; // let CSS grid handle layout
            // small reveal animation
            item.classList.add("fade-in-up", "is-visible");
          } else {
            item.style.display = "none";
          }
        });

        announceAnalytics({ event: "portfolio_filter", filter: selected });
      });
    });
  }

  /* -------------------------
     Modal / project preview
     ------------------------- */
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const modalCloseBtn = modal && modal.querySelector("[data-modal-close]");
  let lastFocusedBeforeModal = null;

  function trapFocus(element) {
    const focusableSelectors = [
      "a[href]:not([disabled])",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");
    const nodes = Array.from(element.querySelectorAll(focusableSelectors));
    if (!nodes.length) return () => {};
    const first = nodes[0];
    const last = nodes[nodes.length - 1];

    function handleKey(e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }

  function openModalWithContent(contentNode) {
    if (!modal) return;
    lastFocusedBeforeModal = document.activeElement;
    // clear prior content
    const body = modal.querySelector(".modal-body");
    body.innerHTML = "";
    // Append a clone to avoid moving nodes from their original place
    body.appendChild(contentNode.cloneNode(true));

    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "grid";
    // tiny delay to allow CSS transition
    setTimeout(() => modal.classList.add("open"), 10);

    // Focus management
    const restoreTrap = trapFocus(modal);
    const focusable = modal.querySelectorAll(
      'button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    (focusable[0] || modalCloseBtn || modal).focus();

    // Store cleanup function on modal element for later
    modal._cleanup = () => {
      restoreTrap();
    };

    announceAnalytics({ event: "modal_open" });
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("open");
    modal.style.display = "none";
    if (modal._cleanup) modal._cleanup();
    if (lastFocusedBeforeModal) lastFocusedBeforeModal.focus();
    announceAnalytics({ event: "modal_close" });
  }

  function initModal() {
    // open modal when clicking .portfolio-link
    document.addEventListener("click", (e) => {
      const a = e.target.closest(".portfolio-link");
      if (!a) return;
      // find the parent .portfolio-item to extract meta
      const item = a.closest(".portfolio-item");
      if (!item) return;
      e.preventDefault();

      // Build a compact preview node
      const title =
        item.querySelector(".portfolio-meta h3")?.textContent ||
        item.querySelector("h3")?.textContent ||
        "Project preview";
      const meta =
        item.querySelector(".portfolio-meta .muted")?.textContent ||
        item.dataset.skillset ||
        "";
      const thumb = item.querySelector(".thumb")?.cloneNode(true) || null;

      const wrapper = document.createElement("div");
      wrapper.className = "preview";
      const h = document.createElement("h3");
      h.textContent = title;
      h.id = "modal-preview-title";
      const p = document.createElement("p");
      p.className = "muted";
      p.textContent = meta;

      // add action buttons
      const actions = document.createElement("div");
      actions.style.marginTop = "12px";
      const viewBtn = document.createElement("a");
      viewBtn.className = "btn btn-primary";
      viewBtn.href = a.href;
      viewBtn.textContent = "Open case study";
      viewBtn.target = "_blank";
      viewBtn.rel = "noopener";

      const closeBtn = document.createElement("button");
      closeBtn.className = "btn btn-ghost";
      closeBtn.type = "button";
      closeBtn.textContent = "Close";
      closeBtn.addEventListener("click", closeModal);

      if (thumb) {
        thumb.style.marginBottom = "12px";
        wrapper.appendChild(thumb);
      }
      wrapper.appendChild(h);
      if (meta) wrapper.appendChild(p);
      actions.appendChild(viewBtn);
      actions.appendChild(closeBtn);
      wrapper.appendChild(actions);

      openModalWithContent(wrapper);
    });

    // Close handlers
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeModal);
    }

    // click outside to close
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    }

    // ESC to close
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        modal &&
        modal.getAttribute("aria-hidden") === "false"
      ) {
        closeModal();
      }
    });
  }

  /* -------------------------
     Animated counters
     ------------------------- */
  function initCounters() {
    const counters = $$("[data-counter]");
    if (!counters.length || typeof IntersectionObserver === "undefined") return;

    const animate = (el, toValue) => {
      const start = 0;
      const end = Number(toValue) || 0;
      const duration = 1200; // ms
      const startTime = performance.now();

      function step(now) {
        const t = Math.min((now - startTime) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.floor(eased * (end - start) + start);
        el.textContent = formatNumber(current) + (el.dataset.suffix || "");
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = formatNumber(end) + (el.dataset.suffix || "");
      }
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const val =
              el.dataset.value ||
              el.getAttribute("data-value") ||
              el.textContent;
            animate(el, val);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((c) => io.observe(c));
  }

  /* -------------------------
     Pricing toggle (monthly / yearly)
     ------------------------- */
  function initPricingToggle() {
    const toggle = document.querySelector("[data-pricing-toggle]");
    const amounts = $$(".amount");

    if (!toggle || !amounts.length) return;

    // Ensure we display the default mode from the markup (/mo)
    function setMode(isYearly) {
      amounts.forEach((a) => {
        const month =
          a.dataset.priceMonth || a.getAttribute("data-price-month");
        const year = a.dataset.priceYear || a.getAttribute("data-price-year");
        if (isYearly && year !== undefined) {
          // Show yearly (we keep numbers raw in markup)
          a.textContent = formatNumber(year);
          // update small per text if needed
          const per = a.parentElement.querySelector(".per");
          if (per) per.textContent = "/yr";
        } else if (!isYearly && month !== undefined) {
          a.textContent = formatNumber(month);
          const per = a.parentElement.querySelector(".per");
          if (per) per.textContent = "/mo";
        }
      });
      announceAnalytics({ event: "pricing_toggle", yearly: !!isYearly });
    }

    // read initial checked state
    setMode(toggle.checked);

    toggle.addEventListener("change", (e) => {
      setMode(e.target.checked);
    });
  }

  /* -------------------------
     Contact form behavior
     ------------------------- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const submitBtn = form.querySelector("[data-form-submit]");
    const demoBtn = form.querySelector("[data-demo-request]");
    const honeypot = form.querySelector('input[name="company_address"]');

    function disableForm(state = true) {
      Array.from(form.elements).forEach((el) => (el.disabled = state));
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // simple validation
      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const service = form.querySelector("#service");
      const message = form.querySelector("#message");

      // Honeypot check
      if (honeypot && honeypot.value) {
        // Bot detected — silently fail but log
        console.warn("Honeypot triggered - suspected bot");
        return;
      }

      if (!name.value.trim()) {
        showToast("Please enter your name");
        name.focus();
        return;
      }
      if (!email.checkValidity()) {
        showToast("Please enter a valid email");
        email.focus();
        return;
      }
      if (!service.value) {
        showToast("Please choose a service");
        service.focus();
        return;
      }

      // Emulate submit (replace this with real fetch to your API)
      disableForm(true);
      submitBtn.textContent = "Sending...";

      // Fake network delay (safe client-side)
      setTimeout(() => {
        // On success
        submitBtn.textContent = "Send inquiry";
        disableForm(false);
        form.reset();
        showToast(
          "Thanks — we received your inquiry. We will respond within 48 hours."
        );
        announceAnalytics({
          event: "lead_submitted",
          service: service.value,
          name: name.value.replace(/\s.*$/, ""),
        });
      }, 900);
    });

    // Demo request button — prefill form and scroll
    if (demoBtn) {
      demoBtn.addEventListener("click", (e) => {
        form.querySelector("#message").value =
          "I would like a demo — please schedule a walkthrough.";
        form.querySelector("#service").value = "web";
        form.scrollIntoView({ behavior: "smooth", block: "center" });
        form.querySelector("#name").focus();
        announceAnalytics({ event: "demo_request_clicked" });
      });
    }
  }

  /* -------------------------
     Fade-in on scroll for .fade-in-up
     ------------------------- */
  function initFadeInObserver() {
    const items = $$(".fade-in-up");
    if (!items.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((i) => io.observe(i));
  }

  /* -------------------------
     Init & bootstrap
     ------------------------- */
  function init() {
    initNav();
    initSmoothScroll();
    initPortfolioFilters();
    initModal();
    initCounters();
    initPricingToggle();
    initContactForm();
    initFadeInObserver();

    // Add small enhancement: lazy-load non-critical images (progressive)
    $$("img").forEach((img) => {
      if (!img.getAttribute("loading")) img.setAttribute("loading", "lazy");
    });

    // Bind analytics for CTA elements (data-analytics)
    document.addEventListener("click", (e) => {
      const target = e.target.closest("[data-analytics]");
      if (!target) return;
      const key = target.dataset.analytics;
      announceAnalytics({ event: "cta_click", key });
    });

    // small accessibility: allow keyboard activation for elements with role="button"
    document.addEventListener("keydown", (e) => {
      if (
        (e.key === "Enter" || e.key === " ") &&
        document.activeElement &&
        document.activeElement.getAttribute("role") === "button"
      ) {
        e.preventDefault();
        document.activeElement.click();
      }
    });

    // Set dynamic year fallback (in case inline script didn't run)
    const yEl = document.getElementById("year");
    if (yEl && !yEl.textContent.trim())
      yEl.textContent = new Date().getFullYear();
  }

  // Run on DOMContentLoaded (defer should make DOM ready too)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
