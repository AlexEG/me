const sectionNavLi1 = document.querySelector("#sectionNavLi1");
const sectionNavLi2 = document.querySelector("#sectionNavLi2");
const sectionNavLi3 = document.querySelector("#sectionNavLi3");

const li1 = document.querySelector("#giveMeActive1");
const li2 = document.querySelector("#giveMeActive2");
const li3 = document.querySelector("#giveMeActive3");

function removeActiveNavbar() {
  li1.classList.remove("active-section");
  li2.classList.remove("active-section");
  li3.classList.remove("active-section");
}

sectionNavLi1.addEventListener("click", function () {
  removeActiveNavbar();
  li1.classList.add("active-section");
});

sectionNavLi2.addEventListener("click", function () {
  removeActiveNavbar();
  li2.classList.add("active-section");
});

sectionNavLi3.addEventListener("click", function () {
  removeActiveNavbar();
  li3.classList.add("active-section");
});
