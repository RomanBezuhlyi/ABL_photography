var swiper = new Swiper(".maternity__swiper-1", {
  pagination: {
    el: ".maternity__swiper-pagination-1",
    type: "fraction",
  },
  navigation: {
    prevEl: ".maternity__swiper-prev-1",
    nextEl: ".maternity__swiper-next-1",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".maternity__swiper-2", {
  pagination: {
    el: ".maternity__swiper-pagination-2",
    type: "fraction",
  },
  navigation: {
    prevEl: ".maternity__swiper-prev-2",
    nextEl: ".maternity__swiper-next-2",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  // Отримуємо посилання на елементи DOM
  const studioButton = document.querySelector(
    ".maternity__switch button:nth-child(1)"
  );
  const outdoorButton = document.querySelector(
    ".maternity__switch button:nth-child(2)"
  );
  const studioCarousel = document.querySelector(".maternity__carousel-1");
  const outdoorCarousel = document.querySelector(".maternity__carousel-2");

  // Додаємо обробник подій для кнопки "Studio"
  studioButton.addEventListener("click", () => {
    studioButton.classList.add("active");
    outdoorButton.classList.remove("active");
    studioCarousel.classList.remove("none");
    outdoorCarousel.classList.add("none");
  });

  // Додаємо обробник подій для кнопки "Outdoor"
  outdoorButton.addEventListener("click", () => {
    outdoorButton.classList.add("active");
    studioButton.classList.remove("active");
    outdoorCarousel.classList.remove("none");
    studioCarousel.classList.add("none");
  });
});
