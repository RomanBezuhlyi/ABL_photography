document.addEventListener("DOMContentLoaded", function () {
  let select = document.querySelector(".custom-select");
  let selectInput = select.querySelector(".select-input");
  let selectItems = select.querySelector(".select-items");
  let selectArr = select.querySelector(".custom-select__arr");

  selectInput.addEventListener("click", function () {
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

      selectItems.classList.remove("open");
      selectInput.classList.remove("input-open");
      selectArr.classList.remove("rotateArr");
    }
  });

  document.addEventListener("click", function (e) {
    if (!select.contains(e.target)) {
      selectItems.classList.remove("open");
      selectInput.classList.remove("input-open");
      selectArr.classList.remove("rotateArr");
    }
  });
});
