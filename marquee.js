document.addEventListener("DOMContentLoaded", function() {
    var marqueeItems = document.querySelectorAll(".marquee_item");
    var itemAmount = marqueeItems.length;
    var animationDuration = itemAmount * 15 + "s";

    // Set the CSS variable for animation duration
    document.documentElement.style.setProperty("--animation-duration", animationDuration);
  });
