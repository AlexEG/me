const calendarContainer = document.querySelector("#calendar-dates");

let weekDAYs = ["Fr", "Sa", "Su", "Mo", "Tu", "We", "Th"];
let week = weekDAYs.join(" ") + " ";
let weekday = week.repeat(15).split(" ");

// console.log(week);  ////
// console.log(weekday);  ////

//
//
let month = "";
let Mon = "";
let date = 9;

//////
for (let i = 0; i < 100; i++) {
  // console.log("🚀 ~ i:", i);  /////
  //
  //

  // --------------
  date += 1;

  if (i === 19) {
    date = 1;
  } else if (i === 50) {
    date = 1;
  } else if (i === 80) {
    date = 1;
  }

  if (i < 19) {
    month = "February";
    Mon = "Feb";
  } else if (i > 18 && i < 50) {
    month = "March";
    Mon = "Mar";
  } else if (i > 49 && i < 80) {
    month = "April";
    Mon = "Apr";
  } else {
    month = "May";
    Mon = "May";
  }

  // console.log("  i =>  " + i);  ////
  // console.log("date =>  " + month + "  " + date);  ////
  // console.log("🚀 ~ file: home.js:20 ~ month:", month, i);  ////

  let templet = ` 
  <a
  href="./day/${month}/${date}/${date}.html"
  class="date-wrapper">

  <div class="date">
    <div class="date-day">
      <h2 class="date-day-of-month">${Mon} ${date}</h2>
      <h2 class="date-day-of-week">${weekday[i]}</h2>
    </div>
    <div class="date-title">
      <div class="date-title-dot"></div>
      <h2>Day ${i + 1}</h2>
    </div>
  </div>
</a>`;
  calendarContainer.innerHTML += templet;
}
