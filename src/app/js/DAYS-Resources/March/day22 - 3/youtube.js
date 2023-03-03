function renderAllvideoTemplateDAY22() {
  // --link, gif, thumbnail, title, channel--

  YouTube.innerHTML += videoTemplate(
    `https://www.youtube.com/watch?v=PkZNo7MFNFg`,
    `https://i.ytimg.com/an_webp/PkZNo7MFNFg/mqdefault_6s.webp?du=3000&sqp=CMDJhaAG&rs=AOn4CLASfgMRkzCzDeskYbMBwMe1JVtMaw`,
    `https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-x9ppUR0YZsIsXO015PLA7KQibg`,
    `Learn JavaScript - Full Course for Beginners`,
    `freecodecamp.org`
  );
  YouTube.innerHTML += videoTemplate(
    `link`,
    `gif`,
    `thumbnail`,
    `title`,
    `channel`
  );
}
