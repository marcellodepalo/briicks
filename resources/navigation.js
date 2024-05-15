(function () {
  document.addEventListener("DOMContentLoaded", function(event) {
    const navBar = document.querySelector("[data-navigation-bar]");
    const mobileMenuButton = document.querySelector("[data-mobile-navigation-button]");
    const mobileMenuLinks = document.querySelectorAll("[data-mobile-menu-item]");
    window.onscroll = function(){checkHeader()}

    const checkHeader = () => {
      if (window.scrollY > 80) {
        navBar.classList.add("-shadow");
      }

      if (window.scrollY <= 0) {
        navBar.classList.remove("-shadow");
      }
    }

    mobileMenuButton.addEventListener("click", () => {
      navBar.classList.toggle("-mobile-open");
    });

    mobileMenuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", () => {
        navBar.classList.remove("-mobile-open");
      });
    });
  });
})();