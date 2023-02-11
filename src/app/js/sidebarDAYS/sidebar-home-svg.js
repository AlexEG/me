const sidebar = document.querySelector("#sidebar");
const sidebarHomeSvg = document.querySelector("#sidebarHomeSvg");

sidebarHomeSvg.addEventListener("click", function () {
  if (sidebar.classList.contains("sidebar-menu-open")) {
    sidebar.classList.remove("sidebar-menu-open");
  } else {
    sidebar.classList.add("sidebar-menu-open");
  }
});
