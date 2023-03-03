function renderAllBookChaptersDAY4() {
  // (bookCoverSRC,chapterNumber,chapterTitle,content[1-7],pageFrom,pageTo)
  ResourcesSection.innerHTML += bookChapterTemplate(
    JS_UP_Going,
    `1`,
    `Into Programming`,
    `Code`,
    `Expressions`,
    `Try It Yourself`,
    `Operators`,
    `Values & Type`,
    `Code Comments`,
    `Variables`,
    `1`,
    `14`
  );
  ResourcesSection.innerHTML += bookChapterTemplate(
    JS_UP_Going,
    `1`,
    `Into Programming`,
    `Blocks`,
    `Conditionals`,
    `Loops`,
    `Functions`,
    `Values & Type`,
    `Practice`,
    `Review`,
    `14`,
    `28`
  );
}
