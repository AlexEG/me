function projectUpdate(projectName, wakatime) {
  repoInfo.innerHTML = `
<img
src="${wakatime}"
alt="wakatime"
/>
<img
src="https://img.shields.io/github/commit-activity/m/AlexEG/${projectName}?color=%23309930&style=plastic"
alt="GitHub commit activity"
/>
<img
src="https://img.shields.io/github/languages/count/AlexEG/${projectName}?style=plastic"
alt="GitHub language count"
/>
<img
src="https://img.shields.io/github/languages/top/AlexEG/${projectName}?color=%239900ff&style=plastic"
alt="top language"
/>
<img
src="https://img.shields.io/github/license/AlexEG/${projectName}?color=%2300dd&style=plastic"
alt="GitHub Project license"
/>
<img
src="https://img.shields.io/github/directory-file-count/AlexEG/${projectName}?&style=plastic"
alt="GitHub contributors"
/>
<img
src="https://img.shields.io/github/repo-size/AlexEG/${projectName}?color=%23ff0055&style=plastic"
alt="GitHub repo size"
/>
<img
src="https://img.shields.io/github/languages/code-size/AlexEG/${projectName}?color=5500bb&style=plastic"
alt="GitHub code size in bytes"
/>`;
}

const wakatime_me = `https://wakatime.com/badge/user/fbdfdc0f-d449-43dc-8090-ced03a22fe8c/project/66f1a506-ac8a-4758-a8f1-f1a155c871d5.svg`;
