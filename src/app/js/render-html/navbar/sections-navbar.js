const sectionsNavbar = document.querySelector("#sectionsNavbar");

function sectionsNavbarHTML() {
  sectionsNavbar.innerHTML = `
  <div class="navbar__inside_contanier">
  <ul class="navbar__inside_contanier__list">
    <li id="sectionNavLi1">
      <a id="giveMeActive1" href="#Statistics" class="active-section"
        >Statistics</a
      >
    </li>
    <li id="sectionNavLi2">
      <a id="giveMeActive2" href="#Resources">Resources</a>
    </li>
    <li id="sectionNavLi3">
      <a id="giveMeActive3" href="#ProjectsUpdate">Projects Update</a>
    </li>
    <li id="sectionNavLi4">
      <a id="giveMeActive4" href="#summary">Summary</a>
    </li>
  </ul>
</div>
  `;
}

sectionsNavbarHTML();

const sectionNavLi1 = document.querySelector("#sectionNavLi1");
const sectionNavLi2 = document.querySelector("#sectionNavLi2");
const sectionNavLi3 = document.querySelector("#sectionNavLi3");
const sectionNavLi4 = document.querySelector("#sectionNavLi4");

const li1 = document.querySelector("#giveMeActive1");
const li2 = document.querySelector("#giveMeActive2");
const li3 = document.querySelector("#giveMeActive3");
const li4 = document.querySelector("#giveMeActive4");

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

sectionNavLi4.addEventListener("click", function () {
  removeActiveNavbar();
  li4.classList.add("active-section");
});
