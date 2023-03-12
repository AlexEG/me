function renderEverythingDAY1() {
  sidebarDAYsHTML(1);

  renderAllvideoTemplateDAY1();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY1();
}

function renderEverythingDAY2() {
  sidebarDAYsHTML(2);

  renderAllvideoTemplateDAY2();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY2();
}

function renderEverythingDAY3() {
  sidebarDAYsHTML(3);

  renderAllvideoTemplateDAY3();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY3();
}

function renderEverythingDAY4() {
  sidebarDAYsHTML(4);

  renderAllvideoTemplateDAY4();
  projectUpdate(`me`, wakatime_me);
  renderAllBookChaptersDAY4();
  StatisticsDAY4();
}

function renderEverythingDAY5() {
  sidebarDAYsHTML(5);

  renderAllvideoTemplateDAY5();
  projectUpdate(`me`, wakatime_me);
  StatisticsDAY5();
  theCSSpodcastDAY5();
}
