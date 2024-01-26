function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
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
