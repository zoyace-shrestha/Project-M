let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slider = document.querySelector(".gallery-slider");

next.addEventListener("click", function () {
  let slides = document.querySelectorAll(".gallery-slides");
  slider.appendChild(slides[0]);
});

prev.addEventListener("click", function () {
  let slides = document.querySelectorAll(".gallery-slides");
  slider.prepend(slides[slides.length - 1]);
});
