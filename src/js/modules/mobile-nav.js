const menu = document.querySelector(".menu");
const menuOpen = document.querySelector(".header__burger");
const menuClose = document.querySelector(".menu__close");
const menuItems = document.querySelectorAll(".menu__item a");
const body = document.querySelector("body");

menuOpen.addEventListener("click", () => {
  menu.classList.add("open-menu");
  body.classList.add("no-scroll");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("open-menu");
  body.classList.remove("no-scroll");
});

// Close the menu when a menu item is clicked
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menu.classList.remove("open-menu");
    body.classList.remove("no-scroll");
  });
});
