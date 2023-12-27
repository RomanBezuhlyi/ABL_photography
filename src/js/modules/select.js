document.addEventListener("DOMContentLoaded", function () {
  // Отримати всі елементи .custom-select на сторінці
  let selectElements = document.querySelectorAll(".custom-select");

  selectElements.forEach(function (select) {
    let selectInput = select.querySelector(".select-input");
    let selectItems = select.querySelector(".select-items");
    let selectArr = select.querySelector(".custom-select__arr");

    selectInput.addEventListener("click", function () {
      // Закрити відкритий .select-items і змінити класи для стилізації
      selectElements.forEach(function (otherSelect) {
        if (otherSelect !== select) {
          otherSelect.querySelector(".select-items").classList.remove("open");
          otherSelect
            .querySelector(".select-input")
            .classList.remove("input-open");
          otherSelect
            .querySelector(".custom-select__arr")
            .classList.remove("rotateArr");
        }
      });

      selectItems.classList.toggle("open");
      selectInput.classList.toggle("input-open");
      selectArr.classList.toggle("rotateArr");
    });

    selectItems.addEventListener("click", function (e) {
      let targetElement = e.target;
      if (targetElement.tagName === "DIV") {
        // Check if the screen width is less than 768 pixels
        if (window.innerWidth < 768) {
          // Truncate the selected text to three words and add an ellipsis
          let selectedText = targetElement.textContent
            .trim()
            .split(/\s+/)
            .slice(0, 3)
            .join(" ");
          selectedText += " ..."; // Add an ellipsis
          selectInput.value = selectedText;
        } else {
          // If the screen width is 768 pixels or more, use the full text
          selectInput.value = targetElement.textContent.trim();
        }

        // Закрити .select-items і змінити класи для стилізації
        selectItems.classList.remove("open");
        selectInput.classList.remove("input-open");
        selectArr.classList.remove("rotateArr");
      }
    });

    // Закрити .select-items при кліку за межами елементу
    document.addEventListener("click", function (e) {
      if (!select.contains(e.target)) {
        selectItems.classList.remove("open");
        selectInput.classList.remove("input-open");
        selectArr.classList.remove("rotateArr");
      }
    });
  });
});
