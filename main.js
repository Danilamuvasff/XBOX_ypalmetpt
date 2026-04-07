const burgerMenu = document.getElementById("burgerMenu");
const mobileNav = document.getElementById("mobileNav");
const menuOverlay = document.getElementById("menuOverlay");

function toggleMenu() {
  burgerMenu.classList.toggle("active");
  mobileNav.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.style.overflow = mobileNav.classList.contains("active")
    ? "hidden"
    : "";
}

burgerMenu.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);
