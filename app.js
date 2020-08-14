const burgerBtn = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");
burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("nav__open");
});
