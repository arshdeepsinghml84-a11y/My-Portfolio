/* =====================================================
   PORTFOLIO SCRIPT
   Sections:
   1. Helpers
   2. Mobile menu
   3. Header shadow on scroll
   4. Highlight the active nav link
   5. Scroll reveal animations
   6. Theme toggle (dark / light)
   7. Placeholder link notice
   8. Contact form validation
   9. Footer year
   ===================================================== */

(function () {
  "use strict";

  /* ---------- 1. HELPERS ---------- */
  var toast = document.getElementById("toast");
  var toastTimer = null;

  // Shows a small message at the bottom of the screen for a few seconds
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 4500);
  }

  /* ---------- 2. MOBILE MENU ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  function setMenu(open) {
    navMenu.classList.toggle("open", open);
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      setMenu(!navMenu.classList.contains("open"));
    });

    // Close the menu after a link is tapped
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    // Close with the Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });

    // Close if the screen becomes wide (desktop layout)
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) setMenu(false);
    });
  }

  /* ---------- 3. HEADER SHADOW ON SCROLL ---------- */
  var header = document.querySelector(".site-header");

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 4. ACTIVE NAV LINK ---------- */
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = [];

  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var section = document.getElementById(id);
    if (section) sections.push(section);
  });

  function updateActiveLink() {
    // A section counts as "current" once its top passes this line
    var line = window.scrollY + 120;
    var currentId = sections.length ? sections[0].id : "";

    sections.forEach(function (section) {
      if (section.offsetTop <= line) currentId = section.id;
    });

    // At the very bottom of the page, highlight the last section
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
      currentId = sections[sections.length - 1].id;
    }

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + currentId;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("resize", updateActiveLink);
  updateActiveLink();

  /* ---------- 5. SCROLL REVEAL ---------- */
  var revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    // Very old browsers: just show everything
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
  }

  /* ---------- 6. THEME TOGGLE ---------- */
  var themeToggle = document.getElementById("theme-toggle");
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      var icon = themeToggle.querySelector(".theme-icon");
      // In dark mode show a sun (click to go light); in light mode show a moon
      if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }
  }

  // Remember the visitor's choice (wrapped in try/catch in case storage is blocked)
  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem("portfolio-theme");
  } catch (error) {
    savedTheme = null;
  }
  applyTheme(savedTheme === "light" ? "light" : "dark"); // dark by default

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch (error) {
        /* storage not available - ignore */
      }
    });
  }

  /* ---------- 7. PLACEHOLDER LINK NOTICE ---------- */
  // Links that still contain YOUR-USERNAME or YOUR-LIVE-DEMO-LINK are placeholders.
  // Instead of sending visitors to a broken page, show a friendly reminder.
  // Once you replace the links in index.html, this stops happening automatically.
  document.querySelectorAll("a[href]").forEach(function (link) {
    var href = link.getAttribute("href");
    var isPlaceholder = href.indexOf("YOUR-USERNAME") !== -1 ||
                        href.indexOf("YOUR-LIVE-DEMO-LINK") !== -1 ||
                        href.indexOf("your-email@example.com") !== -1;

    if (isPlaceholder) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        showToast("This is a placeholder link. Replace it in index.html with your real link.");
      });
    }
  });

  /* ---------- 8. CONTACT FORM VALIDATION ---------- */
  var form = document.getElementById("contact-form");
  var statusBox = document.getElementById("form-status");

  // Each rule returns an error message, or "" if the value is fine
  var rules = {
    name: function (value) {
      if (value.length === 0) return "Please enter your name.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      return "";
    },
    email: function (value) {
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.length === 0) return "Please enter your email address.";
      if (!pattern.test(value)) return "Please enter a valid email address.";
      return "";
    },
    subject: function (value) {
      if (value.length === 0) return "Please enter a subject.";
      if (value.length < 3) return "Subject must be at least 3 characters.";
      return "";
    },
    message: function (value) {
      if (value.length === 0) return "Please write a message.";
      if (value.length < 10) return "Message must be at least 10 characters.";
      return "";
    }
  };

  // Checks one field, shows or clears its error, and returns true if valid
  function validateField(field) {
    var check = rules[field.name];
    var errorBox = document.getElementById(field.name + "-error");
    var group = field.closest(".form-group");
    var message = check ? check(field.value.trim()) : "";

    if (errorBox) errorBox.textContent = message;
    if (group) group.classList.toggle("invalid", message !== "");
    field.setAttribute("aria-invalid", message !== "" ? "true" : "false");

    return message === "";
  }

  if (form) {
    var fields = form.querySelectorAll("input, textarea");

    // Validate when leaving a field, and re-check while typing if it already has an error
    fields.forEach(function (field) {
      field.addEventListener("blur", function () {
        validateField(field);
      });
      field.addEventListener("input", function () {
        if (field.closest(".form-group").classList.contains("invalid")) {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      statusBox.textContent = "";
      statusBox.classList.remove("success");

      var allValid = true;
      var firstInvalid = null;

      fields.forEach(function (field) {
        if (!validateField(field)) {
          allValid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });

      if (!allValid) {
        firstInvalid.focus();
        return;
      }

      /* ------------------------------------------------------------
         IMPORTANT: no email is sent here.
         This website has no backend or email service connected yet,
         so the form only checks the input. To make it really send
         emails, connect a service such as Formspree or EmailJS.
         See the "Connecting the contact form" section in README.md.
         ------------------------------------------------------------ */
      statusBox.textContent =
        "Thanks! Your message looks good, but this demo form is not connected to an email service yet, so nothing was sent.";
      statusBox.classList.add("success");
      form.reset();
    });
  }

  /* ---------- 9. FOOTER YEAR ---------- */
  var yearSpan = document.getElementById("current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
})();
