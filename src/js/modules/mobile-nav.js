const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".header__burger");
const menuClose = document.querySelector(".menu__close");
const body = document.querySelector("body");

menuOpen.addEventListener("click", () => {
  menu.classList.add("open");
  body.classList.add("no-scroll");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("open");
  body.classList.remove("no-scroll");
});
