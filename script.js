
document.addEventListener("DOMContentLoaded", () => {

  // AUTOMATIC COPYRIGHT YEAR
  const yearElement =
    document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }

  // MOBILE NAVIGATION
  const menuToggle =
    document.querySelector(".menu-toggle");

  const navLinks =
    document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
      const isOpen =
        navLinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.textContent =
        isOpen ? "✕" : "☰";
    });

    // CLOSE MENU WHEN LINK IS CLICKED
    const links =
      navLinks.querySelectorAll("a");

    links.forEach(link => {
      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.textContent = "☰";
      });
    });
  }

  // ACTIVE NAVIGATION LINK
  const sections =
    document.querySelectorAll("main section[id]");

  const navigationLinks =
    document.querySelectorAll(".nav-links a");

  function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {
      const sectionTop =
        section.getBoundingClientRect().top;

      if (sectionTop <= 150) {
        currentSection = section.id;
      }
    });

    navigationLinks.forEach(link => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        "#" + currentSection
      ) {
        link.classList.add("active");
      }

    });
  }

  window.addEventListener(
    "scroll",
    updateActiveLink,
    { passive: true }
  );

  updateActiveLink();

});
