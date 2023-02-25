function renderAllvideoTemplateDAY11() {
  // (link, gif, thumbnail, title, channel)
  let video1 = videoTemplate(
    `https://www.youtube.com/watch?v=Tn6-PIqc4UM`,
    `gif`,
    `https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSN5fTL5deqvDvUdGcm3-Cthy9FQ`,
    `React JS Crash Course`,
    `Traversy Media`
  );
  let video2 = videoTemplate(
    `https://www.youtube.com/watch?v=Tn6-PIqc4UM`,
    `gif`,
    `https://i.ytimg.com/vi/Tn6-PIqc4UM/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPBUoCd8ySiHiUEIEhwuu_i1C4Mg`,
    `React in 100 Seconds`,
    `Fireship`
  );

  let video3 = videoTemplate(
    `https://youtu.be/8pDqJVdNa44`,
    `gif`,
    `https://i.ytimg.com/vi/8pDqJVdNa44/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-753i8lAwOIq65wufHPKBPv81nw`,
    `React.js: The Documentary`,
    `Honeypot`
  );

  let video4 = videoTemplate(
    `https://www.youtube.com/watch?v=WzRSysq7F4k&t=137s`,
    `gif`,
    `https://i.ytimg.com/vi/WzRSysq7F4k/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFdVfSDRzXbFs7a203DMRHv5f_ig`,
    ` Q&A with the cast of React.js: The Documentary`,
    `Honeypot`
  );

  let renderAllTemplate = video1 + video2 + video3 + video4;
  YouTube.innerHTML = renderAllTemplate;
}