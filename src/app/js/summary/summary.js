const contentContainer = document.querySelector("#summaryAddContents");

const typeHereContaner = document.querySelector("#typeHereContaner");
const Contnet = document.querySelector("#Contnet");
const imageContnet = document.querySelector("#imageContnet");
const saveContnet = document.querySelector("#saveContnet"); //save btn

// !-----------< ADD TEXT >-----------! //
const addText = document.querySelector("#addText");

// * when click on plus (add text)
addText.addEventListener("click", function () {
  // [1] add text theme to typeHereContaner
  typeHereContaner.classList.add("add-text");
  // [2] give <textarea> display:flex
  typeHereContaner.classList.add("add-content-show");
  // [3] eraseText
  Contnet.value = "";
  Contnet.placeholder = "Type here anything";
});

// --------------<textarea>--------------- //
// to take the text from <textarea> then append it to summary
function addNewText(textFromUI) {
  let p = document.createElement("p");
  let text = document.createTextNode(textFromUI);
  p.appendChild(text);
  contentContainer.appendChild(p);
}

// * when click on save
saveContnet.addEventListener("click", function () {
  // [1] simply appendchild to summary
  let textContent = Contnet.value;
  addNewText(textContent);

  // [2] delete the contaner that user type in it text!
  typeHereContaner.classList.remove("add-content-show");
  // [3] remove text theme
  typeHereContaner.classList.remove("add-text");
});
// --------------<textarea>--------------- //

// !-----------< ADD Image >-----------! //
const addImage = document.querySelector("#addImage");
const saveImg = document.querySelector("#saveImage"); //save btn

// * when click on plus (add text)
addImage.addEventListener("click", function () {
  typeHereContaner.classList.add("add-image");
  typeHereContaner.classList.add("add-content-show");
  Contnet.value = "";
  Contnet.placeholder = "Past here Image URL";
});

// --------------<textarea>--------------- //
function addNewimage(imgURL) {
  let img = document.createElement("img");
  img.src = imgURL;
  contentContainer.appendChild(img);
}

// * when click on save
saveImg.addEventListener("click", function () {
  let imgURL = Contnet.value;
  addNewimage(imgURL);
  typeHereContaner.classList.remove("add-content-show");
  typeHereContaner.classList.remove("add-image");
});
// --------------<textarea>--------------- //

// !-----------< ADD video >-----------! //
const addYT = document.querySelector("#addYT");
const saveVideo = document.querySelector("#saveVideo"); //save btn

// * when click on video (add video)
addYT.addEventListener("click", function () {
  typeHereContaner.classList.add("add-video");
  typeHereContaner.classList.add("add-content-show");
  Contnet.value = "";
  Contnet.placeholder =
    "1.Copy video URL  2.delete { https://youtu.be/ } or {https://www.youtube.com/watch?v=} ";
});

// --------------<textarea>--------------- //
function addNewvideo(ytURL) {
  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${ytURL}`;
  contentContainer.appendChild(iframe);
}

// * when click on save
saveVideo.addEventListener("click", function () {
  let ytEmbedCode = Contnet.value;
  addNewvideo(ytEmbedCode);
  typeHereContaner.classList.remove("add-content-show");
  typeHereContaner.classList.remove("add-video");
});
// --------------<textarea>--------------- //
//
//
// !-----------< ADD link >-----------! //
const addLink = document.querySelector("#addLink");
const saveLink = document.querySelector("#saveLink"); //save btn

// * when click on link (add link)
addLink.addEventListener("click", function () {
  typeHereContaner.classList.add("add-link");
  typeHereContaner.classList.add("add-content-show");
  Contnet.value = "";
  Contnet.placeholder = "Paste site link or ctrl + v";
});

// --------------<textarea>--------------- //
function addNewLink(linkURL) {
  let a = document.createElement("a");
  a.href = linkURL;
  a.target = "_blank";
  let text = document.createTextNode("Link");
  a.appendChild(text);

  contentContainer.appendChild(a);
}

// * when click on save
saveLink.addEventListener("click", function () {
  let linkURL = Contnet.value;
  addNewLink(linkURL);
  typeHereContaner.classList.remove("add-content-show");
  typeHereContaner.classList.remove("add-link");
});
// --------------<textarea>--------------- //
