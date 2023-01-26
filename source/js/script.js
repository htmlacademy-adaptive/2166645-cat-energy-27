let navMain = document.querySelector(".nav");
let navToggle = document.querySelector(".nav__toggle");

const closeMenu = () => {
  navMain.classList.add("nav--closed");
  navMain.classList.remove("nav--opened");
};

const openMenu = () => {
  navMain.classList.remove("nav--closed");
  navMain.classList.add("nav--opened");
};

const statusMenu = () => {
  navMain.classList.remove("nav--nojs");
  closeMenu();
};

if (navMain.classList.contains("nav--nojs")) {
  statusMenu();
}


navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("nav--closed")) {
    openMenu();
  } else {
    closeMenu();
  }
});
