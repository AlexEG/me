function renderAllpodcastDarknetDAY12() {
  // (ep, source, epName, date, description)
  let episode1 = podcastDarknetTemplate(
    `55`,
    `https://dcs.megaphone.fm/ADV4333614155.mp3?key=2cf11fa37511baf53a396c0e77ba4a2c&request_event_id=1e193a68-09d3-4fba-8afc-37961c44818e`,
    `NOIRNET`,
    `Dec 25,2019`,
    `A holiday special episode. A private pen tester takes on a job
    that involves him with another eccentric pen tester, a
    mischievious smile, and his quest to gain access to the network`
  );
  let episode2 = podcastDarknetTemplate(
    `56`,
    `https://dcs.megaphone.fm/ADV4333614155.mp3?key=2cf11fa37511baf53a396c0e77ba4a2c&request_event_id=5ccb150f-5aa5-4422-9e78-3f6a899b23fa`,
    `JORDAN`,
    `Jan 07, 2020`,
    `This is the story of Jordan Harbinger. A bit of a misfit
    teenager, who was always on the edge of trouble. In this story
    we hear what happened that lead to a visit from the FBI.`
  );
  let episode3 = podcastDarknetTemplate(
    `59`,
    `https://dcs.megaphone.fm/ADV2874730743.mp3?key=0539a59bdd0c4a814f7e1f1cc501fef3&request_event_id=b7988497-9ea5-4a8a-a803-c5385a0a1744`,
    `THE COURTHOUSE`,
    `Feb 18, 2020`,
    `In this episode we hear from Gary and Justin. Two seasoned
    penetration testers who tell us a story about the time when they
    tried to break into a courthouse but it went all wrong.`
  );
  let episode4 = podcastDarknetTemplate(
    `57`,
    `https://dcs.megaphone.fm/ADV3206792063.mp3?key=2225d167cd34f0cbdb267766e09c7666&request_event_id=308c07ae-dda1-4415-a19e-0a50b5be4415`,
    `MS08-067`,
    `Jan 21, 2020`,
    `Hear what goes on internally when Microsoft discovers a major
    vulnerability within Windows.`
  );

  let renderAllTemplate = episode1 + episode2 + episode3 + episode4;
  podcastDarknetDAY12.innerHTML = renderAllTemplate;
}
