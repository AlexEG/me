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
//   podcastDarknet.innerHTML += podcastDarknetTemplate(
//     `ep`,
//     `source`,
//     `epName`,
//     `date`,
//     `description`
//   );
//   podcastDarknet.innerHTML += podcastDarknetTemplate(
//     `ep`,
//     `source`,
//     `epName`,
//     `date`,
//     `description`
//   );
// }

// HTML
// renderAllpodcastDarknetDAY000();
