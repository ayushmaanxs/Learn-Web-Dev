// Create a progress bar which shows how much page has been scrolled

const filled = document.querySelector(".fill-amount");
function update() {
  filled.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(update);
}
update();