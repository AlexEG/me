//light Dark Mode
const lightDarkMode = document.querySelector("#lightDarkMode");
const pageBody = document.querySelector("#pageBody");

lightDarkMode.addEventListener("click", function () {
  // pageBody.toggleClass("light-theme")

  if (pageBody.classList.contains("light-theme")) {
    pageBody.classList.remove("light-theme");
  } else {
    pageBody.classList.add("light-theme");
  }
});
