$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true, // Remove navigation arrows
    pauseOnHover: false, // Prevent pausing on hover
    pauseOnFocus: false, // Prevent pausing on focus
  });
});

// Get all menu items
const menuItems = document.querySelectorAll(".menu-item");

// Add click event listener to each menu item
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    const description = item.querySelector(".description");
    description.classList.toggle("show");
  });
});
