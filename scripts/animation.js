ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".reveal", { delay: 200 });
ScrollReveal().reveal(".reveal-left", { delay: 300, origin: "left" });
ScrollReveal().reveal(".reveal-right", { delay: 300, origin: "right" });
ScrollReveal().reveal(".reveal-bottom", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".reveal-top", { delay: 300, origin: "top" });

ScrollReveal().reveal(".reveal-right-interval div", {
  delay: 300,
  origin: "right",
  interval: 300,
});
