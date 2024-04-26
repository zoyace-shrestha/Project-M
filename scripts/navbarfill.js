const filled = document.querySelector(".filled");
const navBarWidth = document.querySelector(".navbar-nav").offsetWidth;
const pageWidth = document.body.offsetWidth;

function updateBar() {
  filled.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(updateBar);
  // console.log(test);
}

updateBar();
