const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    // Close all open accordions except the clicked one
    accordionHeaders.forEach(h => {
      if (h !== header) {
        h.classList.remove("active");
        h.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle the clicked accordion
    header.classList.toggle("active");
    const content = header.nextElementSibling;

    if (header.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});
