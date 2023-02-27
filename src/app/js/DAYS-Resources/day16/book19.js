function renderAllBookChaptersDAY0000000() {^M
  // (bookCoverSRC,chapterNumber,chapterTitle,content[1-7],pageFrom,pageTo)^M
  let book1 = bookChapterTemplate(^M
    `bookCoverSRC`,^M
    `chapterNumber`,^M
    `chapterTitle`,^M
    `content1`,^M
    `content2`,^M
    `content3`,^M
    `content4`,^M
    `content5`,^M
    `content6`,^M
    `content7`,^M
    `pageFrom`,^M
    `pageTo`^M
  );^M
^M
  let book2 = bookChapterTemplate(^M
    `bookCoverSRC`,^M
    `chapterNumber`,^M
    `chapterTitle`,^M
    `content1`,^M
    `content2`,^M
    `content3`,^M
    `content4`,^M
    `content5`,^M
    `content6`,^M
    `content7`,^M
    `pageFrom`,^M
    `pageTo`^M
  );^M
^M
  let renderAllTemplate = book1 + book2;^M
  bookchapters.innerHTML = renderAllTemplate;^M
}^M
