var btnTranslate = document.querySelector("#btn-trans");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");
btnTranslate.addEventListener("click", clickHandler);
function clickHandler() {
  console.log("clickeddd!!!");
  console.log("Input ", txtInput.value);
  outputDiv.innerText = "Hello Manish Welcome " + txtInput.value;
  console.log(outputDiv.innerText);
}