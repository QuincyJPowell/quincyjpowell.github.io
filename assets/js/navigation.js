(() => {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#primary-navigation");

  if (!nav || !toggle || !menu) return;


  const closeMenu = () => {
    nav.classList.remove("is-open");

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  };


  const openMenu = () => {
    nav.classList.add("is-open");

    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
  };


  toggle.addEventListener("click", (event) => {
    event.stopPropagation();

    if (nav.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });


  document.addEventListener("click", (event) => {

    if (
      window.innerWidth <= 800 &&
      nav.classList.contains("is-open") &&
      !nav.contains(event.target)
    ) {
      closeMenu();
    }

  });


  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      closeMenu();
      toggle.blur();
    }

  });


  window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {
      closeMenu();
    }

  });

})();
