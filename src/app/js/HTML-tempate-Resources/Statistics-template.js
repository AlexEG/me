const StatisticsSection = document.querySelector("#Statistics");

//  Statistics Template
function StatisticsTemplate(img) {
  return `
  <a href="https://wakatime.com/@AlexEG" target="_blank" title="See More">
          <img
            src="./statistics/${img}.png"
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
