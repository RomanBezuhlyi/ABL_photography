document.addEventListener("DOMContentLoaded", function () {
  let selects = document.querySelectorAll(".custom-select");

  selects.forEach(function (select) {
    let selectInput = select.querySelector(".select-input");
    let selectItems = select.querySelector(".select-items");

    selectInput.addEventListener("click", function () {
      selectItems.classList.toggle("open");
    });

    selectItems.addEventListener("click", function (e) {
      let targetElement = e.target;

      if (targetElement.tagName === "DIV") {
        let selectedText = targetElement.textContent.trim();

        if (window.innerWidth < 768) {
          selectedText =
            selectedText.split(/\s+/).slice(0, 3).join(" ") + " ...";
        }

        selectInput.value = selectedText;

        selectItems.classList.remove("open");
      }
    });

    document.addEventListener("click", function (e) {
      if (!select.contains(e.target)) {
        selectItems.classList.remove("open");
      }
    });
  });
});
