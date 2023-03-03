function renderAllvideoTemplateDAY3() {
  // (link, gif, thumbnail, title, channel)
  ResourcesSection.innerHTML += videoTemplate(
    `https://www.youtube.com/watch?v=036w1MUoAa0`,
    `gif`,
    `https://i.ytimg.com/vi/036w1MUoAa0/hq720.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARdHtqqv1VD6580p6h-Al_8QnYQg`,
    `New in Chrome 110: picture-in-picture class, launch_handler
  and more!`,
    `Google Chrome Developers`
  );
}
