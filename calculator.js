// Calculator function
let displayVal = '0';
let pendingVal;
let evalStringArray = [];
const btn = document.getElementsByClassName("calc-btn");

Array.from(btn).forEach(button => button.addEventListener('click', (event) => updateDisplayVal(parseInt(event.target.innerText))) )

updateDisplayVal = (clickObj) => {
  // let btnText = clickObj.target.innerText;

  if(displayVal === '0') {
    displayVal = '';
  }

  displayVal += clickObj;
  document.getElementById("display-output").innerText = displayVal
}

document.addEventListener('keydown', (event) => keydownFunction(parseInt(event.key)) )

keydownFunction = (keyVal) => {
  if(Number.isInteger(keyVal)) {
    updateDisplayVal(keyVal)
  }
}



// Color theme change

const row1 = document.getElementsByClassName("row-1")
const row2 = document.getElementsByClassName("row-2")
const row3 = document.getElementsByClassName("row-3")
const row4 = document.getElementsByClassName("row-4")
const row5 = document.getElementsByClassName("row-5")

const radio = document.getElementsByName("color-theme")

// radio.forEach(
//   element => element.addEventListener('click', replaceClassNames(event))
// )
//
// replaceClassNames(event) {
//   switch() {
//     case event.target.value === "":
//     row1.className = ""
//   }
// }
