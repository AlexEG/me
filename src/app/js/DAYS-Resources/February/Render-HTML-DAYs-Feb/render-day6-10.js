function renderEverythingDAY6() {
  day6.innerHTML = `
      <div class="day-number active">
      <span>DAY 6</span></div>`;
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY6();
}

function renderEverythingDAY7() {
  day7.innerHTML = `
      <div class="day-number active">
      <span>DAY 7</span></div></div>`;
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY7();
}

function renderEverythingDAY8() {
  day8.innerHTML = `
      <div class="day-number active">
      <span>DAY 8</span></div>`;
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY8();
}

function renderEverythingDAY9() {
  day9.innerHTML = `
      <div class="day-number active">
      <span>DAY 9</span></div>`;
  StatisticsDAY9();
}

function renderEverythingDAY10() {
  day10.innerHTML = `
      <div class="day-number active">
      <span>DAY 10</span></div>`;
  renderAllvideoTemplateDAY10();
  projectUpdate(`me`, wakatime_me);
  renderAllpodcastDarknetDAY10();
  StatisticsDAY10();
}
