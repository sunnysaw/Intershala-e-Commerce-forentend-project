window.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const categoryColumns = footer.querySelectorAll(".category-column");
  const totalColumns = categoryColumns.length;

  // Adjust the number of columns based on the window size
  function adjustColumns() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      categoryColumns.forEach((column) => {
        column.style.flexBasis = "50%";
      });
    } else {
      categoryColumns.forEach((column) => {
        column.style.flexBasis = `${100 / totalColumns}%`;
      });
    }
  }

  adjustColumns(); // Call the function initially

  // Call the function whenever the window is resized
  window.addEventListener("resize", adjustColumns);
});
