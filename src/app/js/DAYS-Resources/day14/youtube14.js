function renderAllvideoTemplateDAY14() {
  // (link, gif, thumbnail, title, channel)
  let video1 = videoTemplate(
    `https://youtu.be/r-yxNNO1EI8`,
    `gif`,
    `https://i.ytimg.com/vi/r-yxNNO1EI8/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpRfRUQMbokYJu1DmwlKCEVFw3FQA`,
    `YouTube API Project With Authentication`,
    `Traversy Media`
  );

  let renderAllTemplate = video1;
  YouTube.innerHTML = renderAllTemplate;
}
