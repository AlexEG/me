//  W3 School HTML template
function w3SchoolTemplate(
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
  <div class="w3school_container">
  <div class="w3school_container__banner">
    <img
      src="../../../src/assets/sections/Resources/w3school.webp"
      alt="w3school logo"
    />
  </div>
  <div class="w3school_container__language_lessons">
    <p>${title}</p>
    <ul>
      <li>
        <a
          href="https://www.w3schools.com/${l1_Link}.asp"
          target="_blank"  
          title="${l1_Name}"
          >${l1_Name}</a
        >
      </li>
      <li>
        <a
          href="https://www.w3schools.com/${l2_Link}.asp"
          target="_blank"  
          title="${l2_Name}"
          >${l2_Name}</a
        >
      </li>
      <li>
        <a
          href="https://www.w3schools.com/${l3_Link}.asp"
          target="_blank"  
          title="${l3_Name}"
          >${l3_Name}</a
        >
      </li>
      <li>
        <a
          href="https://www.w3schools.com/${l4_Link}.asp"
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

//   ResourcesSection.innerHTML += w3SchoolTemplate( `title`,
//     `l1_Link`,
//     `l1_Name`,
//     `l2_Link`,
//     `l2_Name`,
//     `l3_Link`,
//     `l3_Name`,
//     `l4_Link`,
//     `l4_Name`
//   )
// }

// ResourcesSection.innerHTML += w3SchoolTemplate(
//   `HTML Tutorial`,
//   `html/000000000`,
//   `HTML 1111111`,
//   `html/00000000`,
//   `HTML 1111111`,
//   `html/000000000`,
//   `HTML 11111111`,
//   `html/00000000`,
//   `HTML 111111111`
// );
