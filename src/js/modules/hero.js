var swiper = new Swiper(".hero__swiper", {
  pagination: {
    el: ".hero__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".hero__swiper-prev",
    nextEl: ".hero__swiper-next",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
