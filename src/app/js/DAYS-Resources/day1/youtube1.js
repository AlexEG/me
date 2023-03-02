function renderAllvideoTemplateDAY1() {
  // (link, gif, thumbnail, title, channel)

  let video1 = videoTemplate(
    `https://www.youtube.com/watch?v=zK-yy6C2Nck`,
    `gif`,
    `https://i.ytimg.com/vi/zK-yy6C2Nck/hq720.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPKbx089HQaGjMRPwPS1WKTwYwOQ`,
    `Self-hosting fonts explained (including Google fonts) //
  @font-face tutorial`,
    `Kevin Powell`
  );

  let video2 = videoTemplate(
    `https://www.youtube.com/watch?v=hWGgw1K-i8Y`,
    `gif`,
    `https://i.ytimg.com/vi/hWGgw1K-i8Y/hq720.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIv18Z915jmL0h_kDyZVVUc8LOSg`,
    `Spice up your site | Easy waves, angles, & other creative
    shapes with CSS`,
    `Kevin Powell`
  );

  let video3 = videoTemplate(
    `https://www.youtube.com/watch?v=H04P5YXVssE`,
    `gif`,
    `https://i.ytimg.com/vi/H04P5YXVssE/hq720.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0eWn6wItIhUfljpfFugTntBJqfg`,
    `Position absolute and responsive layouts`,
    `Kevin Powell`
  );

  let video4 = videoTemplate(
    `https://www.youtube.com/watch?v=dldpud1PuL8`,
    `gif`,
    `https://i.ytimg.com/vi/dldpud1PuL8/hq720.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9iDS7gz4q6Fr4c3pmkZWru2ztZw`,
    `Create a cool color-fill animation with CSS`,
    `Kevin Powell`
  );

  let video5 = videoTemplate(
    `https://www.youtube.com/watch?v=I4gUvhG7uFU`,
    `gif`,
    `https://i.ytimg.com/vi/I4gUvhG7uFU/hq720.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHb6yyj5xb2oDlANkKLQOzS6p3KQ`,
    `The problem with percentages in CSS`,
    `Kevin Powell`
  );

  let renderAllTemplate = video1 + video2 + video3 + video4 + video5;
  YouTube.innerHTML = renderAllTemplate;
}
