document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(function (item) {
    item.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
});
