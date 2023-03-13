function renderAllvideoTemplateDAY31() {
  let arrData = [
    {
      thumbnail:
        "https://i.ytimg.com/vi/9dkSSPWu_qY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfUr9enHm2z1ZrMaJwjzt1yISE0g",
      videoLink: "/watch?v=9dkSSPWu_qY&t=227s",
      videoTitle:
        "Learn JavaScript In Arabic 2021 - #079 - Object - Introduction",
      channelName: "Elzero Web School",
      channelLink: "/@ElzeroWebSchool",
    },

    {
      thumbnail:
        "https://i.ytimg.com/vi/9j9XvUnWndI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAOu30e9Q-VnceBOIqDwjsW9DV1A",
      videoLink: "/watch?v=9j9XvUnWndI&t=312s",
      videoTitle:
        "Learn JavaScript In Arabic 2021 - #087 - Get Set Elements Content And Attributes",
      channelName: "Elzero Web School",
      channelLink: "/@ElzeroWebSchool",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/AOabnOI4vOQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcZ51GzwMZAfL6zaBz6Pw8-RG8xQ",
      videoLink: "/watch?v=AOabnOI4vOQ",
      videoTitle:
        "Learn JavaScript In Arabic 2021 - #086 - What Is DOM And Select Elements",
      channelName: "Elzero Web School",
      channelLink: "/@ElzeroWebSchool",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/3DCEt5quosE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwPfuH39c-pO7TQnXIf8YDnUKGcQ",
      videoLink: "/watch?v=3DCEt5quosE",
      videoTitle:
        "Learn JavaScript In Arabic 2021 - #085 - Create Object With Assign Method",
      channelName: "Elzero Web School",
      channelLink: "/@ElzeroWebSchool",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/pCT0ukMWqcQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6ziYzLVPRiNnzGwnstyZGD082_A",
      videoLink: "/watch?v=pCT0ukMWqcQ",
      videoTitle:
        "Learn JavaScript In Arabic 2021 - #084 - Create Object With Create Method",
      channelName: "Elzero Web School",
      channelLink: "/@ElzeroWebSchool",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/XnK3JYPtAJI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhe4ViK_uDjM9qY5El8tLwk1fxSg",
      videoLink: "/watch?v=XnK3JYPtAJI",
      videoTitle: "Learn JavaScript In Arabic 2021 - #083 - This Keyword",
      channelName: "Elzero Web School",
      channelLink: "/@ElzeroWebSchool",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/PbWkJcPrA1g/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdyJ7RcOL7pJUkzqv5Sqw-50kFKw",
      videoLink: "/watch?v=PbWkJcPrA1g",
      videoTitle:
        "Learn JavaScript In Arabic 2021 - #081 - Nested Object And Advanced Trainings",
      channelName: "Elzero Web School",
      channelLink: "/@ElzeroWebSchool",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/C9AWlPyd9lo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACUxh8lFVHofKqYIplRdy-s6SieQ",
      videoLink: "/watch?v=C9AWlPyd9lo",
      videoTitle:
        "Learn JavaScript In Arabic 2021 - #080 - Dot Notation vs Bracket Notation",
      channelName: "Elzero Web School",
      channelLink: "/@ElzeroWebSchool",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/Wn-JbwQLAlA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNM_ZwTOZU_6AVsysW-WVzRZWDSA",
      videoLink: "/watch?v=Wn-JbwQLAlA",
      videoTitle:
        "Learn JavaScript In Arabic 2021 - #078 - Higher Order Functions - Challenge",
      channelName: "Elzero Web School",
      channelLink: "/@ElzeroWebSchool",
    },

    {
      thumbnail:
        "https://i.ytimg.com/vi/I4EWvMFj37g/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiDnrsDr8xj_S8RgM39wp55a2bmA",
      videoLink: "/watch?v=I4EWvMFj37g",
      videoTitle: "Bash in 100 Seconds",
      channelName: "Fireship",
      channelLink: "/@Fireship",
    },
  ];

  for (let i = 0; i < arrData.length; i++) {
    ResourcesSection.innerHTML += videoTemplate(
      arrData[i].videoLink,
      `${arrData[i].thumbnail.slice(
        0,
        arrData[i].thumbnail.indexOf("hqdefault.jpg")
      )}hq720.jpg${arrData[i].thumbnail.slice(
        arrData[i].thumbnail.indexOf("?sqp")
      )}`,
      arrData[i].videoTitle,
      arrData[i].channelName,
      arrData[i].channelLink
    );
  }
}
