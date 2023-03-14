//  W3 School HTML template
function MDNtemplate(
  title,
  l1_Link,
  l1_Name,
  l2_Link,
  l2_Name,
  l3_Link,
  l3_Name,
  l4_Link,
  l4_Name
) {
  return `
  <div class="mdn_container">
          <div class="mdn_container__banner">
            <img
              src="../../../src/assets/MDN_Web_Docs_logo.svg.png"
              alt="mdn logo"
            />
            <img src="../../../src/assets/mdn-banner.png" alt="mdn banner" />
          </div>
          <div class="mdn_container__language_lessons">
            <p>${title}</p>
            <ul>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/${l1_Link}"
                  target="_blank"
                  title="${l1_Name}"
                  >${l1_Name}</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/${l2_Link}"
                  target="_blank"
                  title="${l2_Name}"
                  >${l2_Name}</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/${l3_Link}"
                  target="_blank"
                  title="${l3_Name}"
                  >${l3_Name}</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/${l4_Link}"
                  target="_blank"
                  title="${l4_Name}"
                  >${l4_Name}</a
                >
              </li>
            </ul>
          </div>
        </div>
  `;
}

//   ResourcesSection.innerHTML += MDNtemplate(
//     `title`,
//     `l1_Link`,
//     `l1_Name`,
//     `l2_Link`,
//     `l2_Name`,
//     `l3_Link`,
//     `l3_Name`,
//     `l4_Link`,
//     `l4_Name`
//   )
