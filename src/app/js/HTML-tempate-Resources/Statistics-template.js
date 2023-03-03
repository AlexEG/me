const StatisticsSection = document.querySelector("#Statistics");

//  Statistics Template
function StatisticsTemplate(day, img) {
  return `
  <a href="https://wakatime.com/@AlexEG" target="_blank" title="See More">
          <img
            src="../../src/assets/sections/statistics/day${day}/${img}"
            alt="Coding statistics"
          />
        </a>
  `;
}

// function StatisticsDAY000() {
//   // -- day,img --
//   StatisticsSection.innerHTML += StatisticsTemplate(`day`, `img`);
//   StatisticsSection.innerHTML += StatisticsTemplate(`day`, `img`);
//   StatisticsSection.innerHTML += StatisticsTemplate(`day`, `img`);
// }

// HTML
// StatisticsDAY000();
