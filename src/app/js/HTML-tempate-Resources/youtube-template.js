//  YT-Video HTML template
function videoTemplate(link, gif, thumbnail, title, channel) {
  return `
    <div class="yt-video-contanier">
          <a
            class="yt-vid-link"
            href="${link}"
            target="_blank"
          >
            <img
              class="thumbnail-gif"
              src="${gif}"
              alt=""
            />
            <img
              class="video-thumbnail"
              src="${thumbnail}"
              alt=""
            />
          </a>
          <div class="video-data">
            <div class="channel-logo">
              <img
                src="../../src/assets/sections/Resources/youtube-channels-logo/${channel}.jpg"
                alt=""
              />
            </div>
            <div class="title-channel-name">
              <p class="title">${title}</p>
              <p class="channel-name">${channel}</p>
            </div>
          </div>
        </div>
  `;
}

// renderAllvideoTemplateDAY000()

// function renderAllvideoTemplateDAY000() {
//   // --link, gif, thumbnail, title, channel--

//   ResourcesSection.innerHTML += videoTemplate(
//     `link`,
//     `gif`,
//     `thumbnail`,
//     `title`,
//     `channel`
//   );
//   ResourcesSection.innerHTML += videoTemplate(
//     `link`,
//     `gif`,
//     `thumbnail`,
//     `title`,
//     `channel`
//   );
// }

// HTML
// renderAllvideoTemplateDAY000();
