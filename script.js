const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector("#close");

bar.addEventListener("click", () => {
  navbar.classList.add("active");
});

close.addEventListener("click", () => {
  navbar.classList.remove("active");
});
