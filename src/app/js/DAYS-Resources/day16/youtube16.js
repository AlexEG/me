function renderAllvideoTemplateDAY16() {
  // (link, gif, thumbnail, title, channel)
  let video1 = videoTemplate(`link`, `gif`, `thumbnail`, `title`, `channel`);
  let video2 = videoTemplate(`link`, `gif`, `thumbnail`, `title`, `channel`);

  let renderAllTemplate = video1 + video2;
  YouTube.innerHTML = renderAllTemplate;
}