// CALCULATOR LOGIC
let displayVal = '0';
let pendingVal;
let evalStringArray = [];

updateDisplayWindow = () => {
  document.getElementById("display-output").innerText = displayVal;
}

updateDisplayVal = (clickObj) => {
  if(displayVal === '0') {
    displayVal = '';
  }
  displayVal += clickObj;
  updateDisplayWindow()
}

keydownFunction = (keyVal) => {
  if(Number.isInteger(parseInt(keyVal))) {
    updateDisplayVal(parseInt(keyVal))
  } else if(keyVal == 'Delete') {
    clearDisplay()
  } else if(keyVal == 'Backspace') {
    backspace()
  }
}

backspace = () => {
  // debugger
  displayVal.length <= 1 ? displayVal = '0' : displayVal = displayVal.slice(0,displayVal.length-1)
  updateDisplayWindow()
}

updateDisplayWindow()

// OPERATOR FUNCTIONS
clearDisplay = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  updateDisplayWindow()
}



// EVENT LISTENERS
const numBtn = document.getElementsByClassName("num");
const clrBtn = document.getElementById("calc-clear")
const bksp = document.getElementById("calc-backspace")

Array.from(numBtn).forEach(button => button.addEventListener('click', (event) => updateDisplayVal(parseInt(event.target.innerText))) )
document.addEventListener('keydown', (event) => keydownFunction(event.key) )
clrBtn.addEventListener('click', () => clearDisplay())
bksp.addEventListener('click', () => backspace())


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
