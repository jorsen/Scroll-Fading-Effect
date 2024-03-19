function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  reveals.forEach(function (element) {
    var windowHeight = window.innerHeight;
    var elementTop = element.getBoundingClientRect().top;
    var elementVisible = 50;
    var revealDelay = (elementTop / windowHeight) * 500; // Adjust the multiplier as needed

    if (elementTop < windowHeight - elementVisible) {
      setTimeout(function () {
        element.classList.add("active");
      }, revealDelay);
    } else {
      element.classList.remove("active");
    }
  });
}

// Call reveal once when the page loads
document.addEventListener("DOMContentLoaded", function () {
  reveal();

  // Add a timeout to start the animation after a delay (e.g., 500 milliseconds)
  setTimeout(function () {
    reveal(); // Call it again after the delay
  }, 500);
});

window.addEventListener("scroll", reveal);
