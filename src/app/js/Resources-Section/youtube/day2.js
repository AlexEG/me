function renderAllvideoTemplateDAY2() {
  // (link, gif, thumbnail, title, channel)

  let video1 = videoTemplate(
    `https://www.youtube.com/watch?v=EqzUcMzfV1w`,
    `gif`,
    `https://i.ytimg.com/vi/EqzUcMzfV1w/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcl1tY7eKP2usQgRHlNEyj8O20cg`,
    `Web Development In 2022 - A Practical Guide`,
    `Traversy Media`
  );

  let renderAllTemplate = video1;
  YouTubeDay2.innerHTML = renderAllTemplate;
}
