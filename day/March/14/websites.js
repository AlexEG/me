// // --l1_link = href="https://www.w3schools.com/${l1_Link} --

ResourcesSection.innerHTML += w3SchoolTemplate(
  `HTML Tutorial`,
  `html/default`,
  `HTML Home`,
  `html/html_intro`,
  `HTML Introduction`,
  `html/html_editors`,
  `HTML Editors`,
  `html/html_basic`,
  `HTML Basic Examples`
);

ResourcesSection.innerHTML += w3SchoolTemplate(
  `HTML Tutorial`,
  `html/html_elements`,
  `HTML Elements`,
  `html/html_attributes`,
  `HTML Attributes`,
  `html/html_headings`,
  `HTML Headings`,
  `html/html_paragraphs`,
  `HTML Paragraphs`
);

ResourcesSection.innerHTML += w3SchoolTemplate(
  `HTML Tutorial`,
  `html/html_styles`,
  `HTML Styles`,
  `html/html_formatting`,
  `HTML Text Formatting`,
  `html/html_quotation_elements`,
  `HTML Quotation and Citation Elements`,
  `html/html_comments`,
  `HTML Comments`
);

ResourcesSection.innerHTML += w3SchoolTemplate(
  `HTML Tutorial`,
  `html/html_colors`,
  `HTML Colors`,
  `html/html_css`,
  `HTML Styles - CSS`,
  `html/html_links`,
  `HTML Links`,
  `html/html_images`,
  `HTML Images`
);

ResourcesSection.innerHTML += MDNtemplate(
  `Getting started with the web`,
  `Getting_started_with_the_web`,
  `Getting started with the web`,
  `Getting_started_with_the_web/Installing_basic_software`,
  `Installing basic software`,
  `Getting_started_with_the_web/What_will_your_website_look_like`,
  `What will your website look like?`,
  `Getting_started_with_the_web/Dealing_with_files`,
  `Dealing with files`
);

ResourcesSection.innerHTML += MDNtemplate(
  `Getting started with the web`,
  `Getting_started_with_the_web/HTML_basics`,
  `HTML basics`,
  `Getting_started_with_the_web/CSS_basics`,
  `CSS basics`,
  `Getting_started_with_the_web/JavaScript_basics`,
  `JavaScript basics`,
  `Getting_started_with_the_web/Publishing_your_website`,
  `Publishing your website`
);

ResourcesSection.innerHTML += MDNtemplate(
  `Getting started with the web`,
  `Getting_started_with_the_web/How_the_Web_works`,
  `How the web works`,
  `Common_questions/Web_mechanics/How_does_the_Internet_work`,
  `How does the Internet work?`,
  `Common_questions/Web_mechanics`,
  `Web mechanics`,
  `Common_questions/Design_and_accessibility`,
  `Design and accessibility`
);
