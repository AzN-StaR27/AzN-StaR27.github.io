const toggle = document.querySelector(".burger");
const menuBurger = document.querySelector(".menu-burger");

toggle?.addEventListener("click", () => {
  menuBurger?.classList.toggle("active");
  toggle.classList.toggle("active");
});

menuBurger?.addEventListener("click", () => {
  menuBurger.classList.toggle("active");
  toggle?.classList.toggle("active");
});
