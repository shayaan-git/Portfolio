// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  // Select all anchor links that start with #
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href")); // Get the target element from the href attribute
    // If the target exists, scroll to it smoothly
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Add active nav link highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// Resume button event listener (moved outside scroll event)
const alertButton = document.getElementById("alertbutton");
if (alertButton) {
  alertButton.addEventListener("click", function (e) {
    e.preventDefault();
    alert("(304, 503) Page is temporary unavailable");
  });
}

// Update active section on scroll
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  // Highlight the active nav link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Update year in footer
document.getElementById("year").textContent = new Date().getFullYear();
