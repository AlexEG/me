// const textContaner = document.querySelector("#typeHereContanerText");
// const ContnetText = document.querySelector("#ContnetText");
// const saveText = document.querySelector("#saveText"); //save btn

// // !-----------< ADD TEXT >-----------! //
// const addText = document.querySelector("#addText");

// // * when click on plus (add text)
// addText.addEventListener("click", function () {
//   // [1] give <textarea> display:flex
//   textContaner.classList.add("add-content-show");
//   // [2] eraseText
//   ContnetText.value = "";

//   // --------------<textarea>--------------- //
//   // to take the text from <textarea> then append it to summary
//   function addNewText(textFromUI) {
//     let p = document.createElement("p");
//     let text = document.createTextNode(textFromUI);
//     p.appendChild(text);
//     ContnetText.appendChild(p);
//   }

//   // * when click on save
//   saveText.addEventListener("click", function () {
//     // [1] simply appendchild to summary
//     let textContent = ContnetText.value;
//     addNewText(textContent);
//     // [2] delete the contaner that user type in it text!
//     textContaner.classList.remove("add-content-show");
//   });
// });
// // --------------<textarea>--------------- //
