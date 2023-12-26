var swiper = new Swiper(".reviews__swiper", {
  pagination: {
    el: ".reviews__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".reviews__swiper-prev",
    nextEl: ".reviews__swiper-next",
  },
  slidesPerView: 1,
  spaceBetween: 30,
});

document.addEventListener("DOMContentLoaded", function () {
  // Find all elements with the class "reviews__slide-link"
  var readMoreLinks = document.querySelectorAll(".reviews__slide-link");

  // Iterate through each link and attach a click event listener
  readMoreLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default behavior of the link (i.e., navigating to the href)
      event.preventDefault();

      // Find the parent element with class "reviews__slide"
      var slide = this.closest(".reviews__slide");

      // Find the element with class "reviews__slide-text" inside the parent slide
      var slideText = slide.querySelector(".reviews__slide-text");

      // Toggle the "hide-text" class on the "reviews__slide-text" element
      slideText.classList.toggle("hide-text");
    });
  });
});
