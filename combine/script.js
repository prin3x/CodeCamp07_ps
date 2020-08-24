const numberEl = document.querySelector(".number");
const link = document.querySelectorAll(".link");
const firstLink = document.querySelector(".link-first");
const lastLink = document.querySelector(".link-last");

link.forEach((link, index) => {
  link.addEventListener("click", e => {
    e.preventDefault();

    numberEl.textContent = index + 1;
  });
});

firstLink.addEventListener("click", e => {
  e.preventDefault();
  numberEl.textContent = 1;
});
lastLink.addEventListener("click", e => {
  e.preventDefault();
  numberEl.textContent = 5;
});
