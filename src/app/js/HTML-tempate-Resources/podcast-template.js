// Darknet podcast HTML template
function podcastDarknetTemplate(ep, source, epName, date, description) {
  return `
  <div class="Podcast-contanier darknet-diaries">
  <picture
    ><img
      src="../../src/assets/sections/Resources/podcast/Darknet-Diaries/ep${ep}.jpg"
      alt="Darknet Diaries Banner episode"
  /></picture>
  <div class="player-container">
    <video controls="" name="media">
      <source
        src="${source}"
      />
    </video>
  </div>
  <div class="episode-details">
    <p><span>EP ${ep}: ${epName}</span>${date}</p>
    <p>
    ${description}
    </p>
  </div>
</div>
  `;
}

// function renderAllpodcastDarknetDAY000() {
//   // (ep, source, epName, date, description)
//   ResourcesSection.innerHTML += podcastDarknetTemplate(
//     `ep`,
//     `source`,
//     `epName`,
//     `date`,
//     `description`
//   );
//   ResourcesSection.innerHTML += podcastDarknetTemplate(
//     `ep`,
//     `source`,
//     `epName`,
//     `date`,
//     `description`
//   );
// }

// HTML
// renderAllpodcastDarknetDAY000();

// TheCSSpodcast HTML template
function theCSSpodcastTemplate(episodeID, date, description) {
  return `
  <div class="Podcast-contanier thecsspodcast">
  <picture
    ><img
      src="../../src/assets/sections/Resources/podcast/thecsspodcast.webp"
      alt="the css podcast banner"
  /></picture>
  <div class="player-container">
    <iframe
      title="Libsyn Player"
      style="border: none"
      src="//html5-player.libsyn.com/embed/episode/id/${episodeID}/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/550055/"
      height="90"
      width="100%"
      scrolling="no"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      oallowfullscreen
      msallowfullscreen
    ></iframe>
  </div>
  <div class="episode-details">
    <p>${date}</p>
    <p>
    ${description}
    </p>
  </div>
</div>
</div>
  `;
}

// function theCSSpodcastDAY000() {
//   // (episodeID, date, description)

//   ResourcesSection.innerHTML += theCSSpodcastTemplate(
//     `episodeID`,
//     `date`,
//     `description`
//   );
//   ResourcesSection.innerHTML += theCSSpodcastTemplate(
//     `episodeID`,
//     `date`,
//     `description`
//   );
// }

// theCSSpodcastDAY000();
