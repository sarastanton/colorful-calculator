
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
  if(Number.isInteger(parseFloat(keyVal))) {
    updateDisplayVal(parseFloat(keyVal))
  } else {
    switch(keyVal) {
      case 'Delete':
        clearDisplay();
        break;
      case 'Backspace':
        backspace();
        break;
      case '.':
        addDecimal();
        break;
      case '+':
        performOperation("calc-add");
        break;
      case '-':
        performOperation("calc-subtract");
        break;
      case '*':
        performOperation("calc-multiply");
        break;
      case '/':
        performOperation("calc-divide");
        break;

    }
  }
}

backspace = () => {
  // debugger
  displayVal.length <= 1 ? displayVal = '0' : displayVal = displayVal.slice(0,displayVal.length-1)
  updateDisplayWindow()
}

addDecimal = () => {
  if(!displayVal.includes('.')) {
    displayVal += '.'
    updateDisplayWindow()
  }
}

flipSign = () => {
  let displayInt = parseFloat(displayVal)*-1;
  displayVal = displayInt.toString();
  updateDisplayWindow()
}


// OPERATOR FUNCTIONS
clearDisplay = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  updateDisplayWindow()
}

performOperation = (clickObjId) => {
  switch(clickObjId) {
    case "+":
    case "-":
    case "*":
    case "/":
      console.log(clickObjId)
      evalStringArray.push(displayVal);
      evalStringArray.push(clickObjId)
      displayVal = ' '
      break;
    case "calc-equals":
      console.log(clickObjId)
      evalStringArray.push(displayVal);
      displayVal = (Math.round(eval(evalStringArray.join(' '))*100000)/100000).toString();
      updateDisplayWindow();
      break;
  }
}



// EVENT LISTENERS
const numBtn = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("operator");
const clrBtn = document.getElementById("calc-clear")
const bksp = document.getElementById("calc-backspace")
const decimal = document.getElementById("calc-decimal")
const plusMinus = document.getElementById("calc-plusminus")

Array.from(numBtn).forEach(button =>
   button.addEventListener('click', (event) => updateDisplayVal(parseFloat(event.target.innerText)))
 )

Array.from(operators).forEach(button =>
   button.addEventListener('click', (event) => performOperation(event.target.id))
 )

document.addEventListener('keydown', (event) => keydownFunction(event.key) )

clrBtn.addEventListener('click', () => clearDisplay())

bksp.addEventListener('click', () => backspace())

decimal.addEventListener('click', () => addDecimal())

plusMinus.addEventListener('click', () => flipSign())

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


updateDisplayWindow();
