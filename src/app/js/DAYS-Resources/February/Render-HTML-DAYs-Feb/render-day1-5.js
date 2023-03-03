function renderEverythingDAY1() {
  day1.innerHTML = `
      <div class="day-number active">
      <span>DAY 1</span></div>`;
  renderAllvideoTemplateDAY1();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY1();
}

function renderEverythingDAY2() {
  day2.innerHTML = `
  <div class="day-number active">
  <span>DAY 2</span></div>`;
  renderAllvideoTemplateDAY2();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY2();
}

function renderEverythingDAY3() {
  day3.innerHTML = `
  <div class="day-number active">
  <span>DAY 3</span></div>`;
  renderAllvideoTemplateDAY3();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY3();
}

function renderEverythingDAY4() {
  day4.innerHTML = `
      <div class="day-number active">
      <span>DAY 4</span></div>`;
  renderAllvideoTemplateDAY4();
  projectUpdate(`me`, wakatime_me);
  renderAllBookChaptersDAY4();
  StatisticsDAY4();
}

function renderEverythingDAY5() {
  day5.innerHTML = `
      <div class="day-number active">
      <span>DAY 5</span></div>`;
  renderAllvideoTemplateDAY5();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY5();
}
