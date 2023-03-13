//  YT-Video HTML template
function videoTemplate(link, thumbnail, title, channel, channelLink) {
  return `
    <div class="yt-video-contanier">
          <a
            class="yt-vid-link"
            href="https://www.youtube.com${link}"
            target="_blank"
          >
            <img
              class="video-thumbnail"
              src="${thumbnail}"
              alt=""
            />
          </a>
          <div class="video-data">
            <div class="channel-logo">
            <a href="https://www.youtube.com/${channelLink}" target="_blank" title="${channel}">
              <img
                src="../../../src/assets/sections/Resources/youtube-channels-logo/${channel}.jpg"
                alt=""
              />
              </a>
            </div>
            <div class="title-channel-name">
              <p class="title">${title}</p>
              <a href="https://www.youtube.com/${channelLink}" target="_blank" title="${channel} class="channel-name">${channel}</a>
            </div>
          </div>
        </div>
  `;
}

// function renderAllvideoTemplateDAY000() {
//   let arrData = ;

//   for (let i = 0; i < arrData.length; i++) {
//     ResourcesSection.innerHTML += videoTemplate(
//       arrData[i].videoLink,
//       `${arrData[i].thumbnail.slice(
//         0,
//         arrData[i].thumbnail.indexOf("hqdefault.jpg")
//       )}hq720.jpg${arrData[i].thumbnail.slice(
//         arrData[i].thumbnail.indexOf("?sqp")
//       )}`,
//       arrData[i].videoTitle,
//       arrData[i].channelName,
//       arrData[i].channelLink
//     );
//   }
// }

/* GET data script

function getMyTodaysData() {
  let YTtoday = document.querySelector("#contents ytd-item-section-renderer");
  let ytHistoryToday = [];
  for (let i = 1; i <= YTtoday.length_; i++) {
    let video = {
      thumbnail: YTtoday.querySelector(
        `#contents ytd-video-renderer:nth-child(${i}) #dismissible ytd-thumbnail #thumbnail > yt-image > img`
      ).getAttribute("src"),
      videoLink: YTtoday.querySelector(
        `#contents ytd-video-renderer:nth-child(${i}) #dismissible ytd-thumbnail #thumbnail`
      ).getAttribute("href"),
      videoTitle: YTtoday.querySelector(
        `#contents ytd-video-renderer:nth-child(${i}) #video-title > yt-formatted-string`
      ).textContent,
      channelName: YTtoday.querySelector(
        `#contents ytd-video-renderer:nth-child(${i}) #meta ytd-video-meta-block #metadata #byline-container #channel-name #container #text-container #text > a`
      ).textContent,
      channelLink: YTtoday.querySelector(
        `#contents ytd-video-renderer:nth-child(${i}) #meta ytd-video-meta-block #metadata #byline-container #channel-name #container #text-container #text > a`
      ).getAttribute("href"),
    };
    ytHistoryToday.push(video);
  }
  console.log(ytHistoryToday);
}
getMyTodaysData();

*/
