// Darknet podcast HTML template
function bookChapterTemplate(
  bookCoverSRC,
  chapterNumber,
  chapterTitle,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  pageFrom,
  pageTo
) {
  return `
  <div class="book-container">
    <picture
      ><img
        src="${bookCoverSRC}"
        alt="Book Cover"
    /></picture>
    <div class="book-details">
      <p><span>${chapterNumber}.</span>${chapterTitle}</p>
      <ul>
        <li>${content1}</li>
        <li>${content2}</li>
        <li>${content3}</li>
        <li>${content4}</li>
        <li>${content5}</li>
        <li>${content6}</li>
        <li>${content7}</li>
      </ul>
      <p>Page <span>${pageFrom}</span> to <span>${pageTo}</span></p>
    </div>
  </div>
  `;
}

// function renderAllBookChaptersDAY000() {
//   // (bookCoverSRC,chapterNumber,chapterTitle,content[1-7],pageFrom,pageTo)
//   let book1 = bookChapterTemplate(
//     `bookCoverSRC`,
//     `chapterNumber`,
//     `chapterTitle`,
//     `content1`,
//     `content2`,
//     `content3`,
//     `content4`,
//     `content5`,
//     `content6`,
//     `content7`,
//     `pageFrom`,
//     `pageTo`
//   );

//   let book2 = bookChapterTemplate(
//     `bookCoverSRC`,
//     `chapterNumber`,
//     `chapterTitle`,
//     `content1`,
//     `content2`,
//     `content3`,
//     `content4`,
//     `content5`,
//     `content6`,
//     `content7`,
//     `pageFrom`,
//     `pageTo`
//   );

//   let renderAllTemplate = book1 + book2;
//   bookchapters.innerHTML = renderAllTemplate;
// }

// HTML
// renderAllBookChaptersDAY000();

const JS_UP_Going = `../src/assets/sections/Resources/books/JS-Up-and-Going.webp`;
