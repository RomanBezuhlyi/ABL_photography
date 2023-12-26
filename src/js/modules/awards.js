var swiper = new Swiper(".awards__swiper", {
  pagination: {
    el: ".awards__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".awards__swiper-prev",
    nextEl: ".awards__swiper-next",
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
