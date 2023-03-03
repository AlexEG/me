function renderEverythingDAY11() {
  day11.innerHTML = `
  <div class="day-number active">
  <span>DAY 11</span></div>`;
  renderAllvideoTemplateDAY11();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY11();
}

function renderEverythingDAY12() {
  day12.innerHTML = `
  <div class="day-number active">
  <span>DAY 12</span></div>`;
  renderAllpodcastDarknetDAY12();
  StatisticsDAY12();
}

function renderEverythingDAY13() {
  day13.innerHTML = `
  <div class="day-number active">
  <span>DAY 13</span></div>`;
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY13();
}

function renderEverythingDAY14() {
  day14.innerHTML = `
  <div class="day-number active">
  <span>DAY 14</span></div>`;
  renderAllvideoTemplateDAY14();
  StatisticsDAY14();
}

function renderEverythingDAY15() {
  day15.innerHTML = `
  <div class="day-number active">
  <span>DAY 15</span></div>`;
  renderAllpodcastDarknetDAY15();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY15();
}
