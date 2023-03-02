function renderAllvideoTemplateDAY5() {
  // (link, gif, thumbnail, title, channel)
  let video1 = videoTemplate(
    `https://www.youtube.com/watch?v=ppwagkhrZJs`,
    `gif`,
    `https://i.ytimg.com/vi/sFsRylCQblw/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8xgeRFJtMXzDiJSPb40esigtifA`,
    `7 Web Features You Didn’t Know Existed`,
    `Fireship`
  );
  let video2 = videoTemplate(
    `https://www.youtube.com/watch?v=sFsRylCQblw&t=185s`,
    `gif`,
    `https://i.ytimg.com/vi/ppwagkhrZJs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoHc5npbmeOJE1Q5nGTVPvBGREJA`,
    `7 Web Features You Didn’t Know Existed`,
    `Fireship`
  );

  let renderAllTemplate = video1 + video2;
  YouTube.innerHTML = renderAllTemplate;
}
