
// CALCULATOR LOGIC
let displayVal = '0';
let evalStringArray = [];

updateDisplayWindow = () => {
  document.getElementById("display-output").innerText = displayVal.toLocaleString("en");
  document.getElementById("display-history").innerText = evalStringArray;

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
      case '-':
      case '*':
      case '/':
        performOperation(keyVal);
        break;
      case 'Enter':
        performOperation("calc-equals");
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
  evalStringArray = [];
  updateDisplayWindow()
}

performOperation = (clickObjId) => {
  switch(clickObjId) {
    case "+":
    case "-":
    case "*":
    case "/":
      evalStringArray.push(displayVal);
      evalStringArray.push(clickObjId)
      displayVal = ' '
      break;
    case "calc-equals":
      evalStringArray.push(displayVal);
      let calcVal = eval(evalStringArray.join(''));
      displayVal = (Math.round(calcVal*100000)/100000);
      evalStringArray = Array.from(displayVal)
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
  button.addEventListener('click', (event) =>
    updateDisplayVal(parseInt(event.target.innerText))
  )
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
const column = document.getElementsByClassName("column")

const radios = document.getElementsByName("color-theme")

Array.from(radios).forEach(radio =>
  radio.addEventListener('click', (event) => changeColor(event))
)

changeColor = (event) => {
  switch(event.target.value) {
    case
  }
}



/////////////////////

updateDisplayWindow();
