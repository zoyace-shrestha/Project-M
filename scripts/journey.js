const sectionJourney = document.querySelector(".journey-section-hero");

window.addEventListener("scroll", () => {
  sectionJourney.style.backgroundPositionY = `${scrollY / 1.5}px`;
});

window.onload = function () {
  let path = document.querySelector(".line-container path");
  let pathLength = path.getTotalLength();
  let drawnOnce = false; // Flag to check if the path has been drawn once

  path.style.strokeDasharray = pathLength + " " + pathLength;
  path.style.strokeDashoffset = pathLength;

  window.addEventListener("scroll", () => {
    var scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    var drawLength = pathLength * scrollPercentage * 0.875;

    // Draw the path only if it hasn't been drawn once
    if (!drawnOnce) {
      path.style.strokeDashoffset = pathLength - drawLength;
    }

    // If the scroll reaches the end and the path hasn't been drawn yet, draw it
    if (scrollPercentage >= 1 && !drawnOnce) {
      path.style.strokeDashoffset = 0; // Fully draw the path
      drawnOnce = true; // Set the flag to true to indicate the path has been drawn
    }
  });
};

function scrollToTop() {
  window.scroll(0, 0);
}
