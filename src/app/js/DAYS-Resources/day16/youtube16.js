function renderAllvideoTemplateDAY16() {
  // (link, gif, thumbnail, title, channel)
  let video1 = videoTemplate(
    `https://www.youtube.com/watch?v=YmgGtaCDP9Q&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=31`,
    `gif`,
    `https://i.ytimg.com/vi/YmgGtaCDP9Q/hq720.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAKtyY1sDAf_5HRFR6Xy9yAJA5KIg`,
    `#031 - Comparison Operators`,
    `Elzero Web School`
  );
  let video2 = videoTemplate(
    `https://www.youtube.com/watch?v=SR3wFWdsEaM&t=2s`,
    `gif`,
    `https://i.ytimg.com/vi/SR3wFWdsEaM/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxBG60trzeGomcVymZSlC-LzXT6Q`,
    `#032 - Logical Operators`,
    `Elzero Web School`
  );
  let video3 = videoTemplate(
    `https://www.youtube.com/watch?v=rUa4NQQn7Zc&t=2s`,
    `gif`,
    `https://i.ytimg.com/vi/rUa4NQQn7Zc/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzI3gVm6lAy2Z8TFROjpeZI8p6Ig`,
    `#033 - If Conditions`,
    `Elzero Web School`
  );
  let video4 = videoTemplate(
    `https://www.youtube.com/watch?v=Innbt6DX64A&t=3s`,
    `gif`,
    `https://i.ytimg.com/vi/Innbt6DX64A/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVUcf_ooDVl-qTaXs75LmOyryD5A`,
    `#034 - Nested If Condition`,
    `Elzero Web School`
  );
  let video5 = videoTemplate(
    `https://www.youtube.com/watch?v=zfBgIOaDBOM&t=4s`,
    `gif`,
    `https://i.ytimg.com/vi/zfBgIOaDBOM/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHSqzKzhVG_FFeqNyqeaCrXWvooA`,
    `#035 - Conditional Ternary Operator`,
    `Elzero Web School`
  );
  let video6 = videoTemplate(
    `https://www.youtube.com/watch?v=-VU6Gumxs4k&t=3s`,
    `gif`,
    `https://i.ytimg.com/vi/-VU6Gumxs4k/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4OMWh3UsCs2ok8PJsw9mmPNGJvg`,
    `#036 - Nullish Coalescing Operator And Logical Or`,
    `Elzero Web School`
  );

  let renderAllTemplate = video1 + video2 + video3 + video4 + video5 + video6;

  YouTube.innerHTML = renderAllTemplate;
}
