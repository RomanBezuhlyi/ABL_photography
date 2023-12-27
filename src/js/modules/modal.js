document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal-overlay");
  const closeModal = document.querySelector(".modal__close");
  const bodyWrap = document.querySelector("body");

  // Отримати всі елементи з класом "book-session"
  const bookSessionButtons = document.querySelectorAll(".book-session");

  // Додати обробник подій для кожної кнопки "book-session"
  bookSessionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Додати клас "open-modal" до елемента .modal-overlay
      modal.classList.add("open-modal");
      bodyWrap.classList.add("no-scroll");
    });
  });

  // Додати обробник подій для кнопки закриття модального вікна
  closeModal.addEventListener("click", function () {
    // Видалити клас "open-modal" з елемента .modal-overlay
    modal.classList.remove("open-modal");
    bodyWrap.classList.remove("no-scroll");
  });
});
