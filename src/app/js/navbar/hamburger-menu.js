const sidebarHomeSvg = document.querySelector("#sidebarHomeSvg");

// sidebarHomeSvg.addEventListener("click", () => {
//   const currentState = sidebarHomeSvg.getAttribute("data-state");

//   if (!currentState || currentState === "closed") {
//     sidebarHomeSvg.setAttribute("data-state", "opened");
//     sidebarHomeSvg.setAttribute("aria-expanded", "true");
//   } else {
//     sidebarHomeSvg.setAttribute("data-state", "closed");
//     sidebarHomeSvg.setAttribute("aria-expanded", "false");
//   }
// });

const sidebar = document.querySelector("#sidebar");

sidebarHomeSvg.addEventListener("click", function () {
  if (sidebar.classList.contains("sidebar-menu-open")) {
    sidebar.classList.remove("sidebar-menu-open");
  } else {
    sidebar.classList.add("sidebar-menu-open");
  }
});
