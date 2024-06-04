const btn = document.querySelector(".header_btn-menu");
const nav = document.querySelector(".header_nav");

btn.addEventListener("click", function () {
  btn.classList.toggle("header_btn-menu_open");
  nav.classList.toggle("header_nav_open");
});
