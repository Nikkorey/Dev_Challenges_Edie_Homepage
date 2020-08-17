const burgerBtn = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav");
burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("nav__open");
});

const navLink = document.querySelectorAll(".nav__item-link");
console.log(navLink);

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav__open");
  });
});
