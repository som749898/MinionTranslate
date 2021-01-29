var btn = document.querySelector(".btnTranslate")
var textarea = document.querySelector("#text")
var textout = document.querySelector(".output")
console.log(textout)
btn.addEventListener("click", clickHand)
function clickHand() {
  console.log("clicked!!!")
  console.log("input", textarea.value)
}

function clickEvent(){
  console.log("Clickedddd!!")
}