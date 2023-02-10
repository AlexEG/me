console.log("first code 2023-2-9 11:20AM");

document.getElementById("daysContainer").onmousemove = (e) => {
  for (const day of document.getElementsByClassName("day")) {
    const rect = day.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    day.style.setProperty("--mouse-x", `${x}px`);
    day.style.setProperty("--mouse-y", `${y}px`);
  }
};
