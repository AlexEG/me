const ToolsContainer = document.getElementById("ToolsContainer");

function toolCardTemplate(pageLink, imgURL, toolName, description) {
  let template = `
  <button class="button glow-effect" data-glow-offset="true">
  <a href="${pageLink}">
    <div class="tool__card">
      <div class="img">
        <img src="${imgURL}" alt="${toolName} Banner" />
      </div>
      <div class="details">
        <h2>${toolName}</h2>
        <p>
        ${description}
        </p>
      </div>
    </div>
  </a>
  <svg class="glow-container">
    <rect
      pathLength="100"
      stroke-linecap="round"
      class="glow-blur"
    ></rect>
    <rect
      pathLength="100"
      stroke-linecap="round"
      class="glow-line"
    ></rect>
  </svg>
</button>`;
  return template;
}

//  tools cards  //

// ToolsContainer.innerHTML += toolCardTemplate(`pageLink`,`imgURL`,`toolName`,`description`);

//*  => YouTube Banner <=
ToolsContainer.innerHTML += toolCardTemplate(
  `./calendar.html`,
  `youtube-banner.jpg`,
  `My Calendar`,
  `00000000000000000000000000000000.`
);

//*  => Passwords <=
ToolsContainer.innerHTML += toolCardTemplate(
  `./html/passwords.html`,
  `password.webp`,
  `coding Statistics`,
  `0000000000000000000000000000000`
);

//*  => youtube thumbnail <=
ToolsContainer.innerHTML += toolCardTemplate(
  `#`,
  `youtube-thumbnails.webp`,
  `Projects Update`,
  `0000000000000000000000000000000000000000000`
);

ToolsContainer.innerHTML += toolCardTemplate(
  `#`,
  `youtube-thumbnails.webp`,
  `Study Tracker`,
  `0000000000000000000000000000000000000000000`
);

ToolsContainer.innerHTML += toolCardTemplate(
  `#`,
  `./src/assets/todays-summary.jpg`,
  `Today's Summary`,
  `Summary`
);

// hover effect tool__card
(function setGlowEffectRx() {
  const glowEffects = document.querySelectorAll(".glow-effect");
  glowEffects.forEach((glowEffect) => {
    const glowLines = glowEffect.querySelectorAll("rect");
    const rx = getComputedStyle(glowEffect).borderRadius;
    glowLines.forEach((line) => {
      line.setAttribute("rx", rx);
    });
  });
})();
