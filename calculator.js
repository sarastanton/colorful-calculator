
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
const numBtn = Array.from(document.getElementsByClassName("num"));
const allBtn = Array.from(document.getElementsByClassName("calc-btn"));
const operators = Array.from(document.getElementsByClassName("operator"));
const clrBtn = document.getElementById("calc-clear")
const bksp = document.getElementById("calc-backspace")
const decimal = document.getElementById("calc-decimal")
const plusMinus = document.getElementById("calc-plusminus")

numBtn.forEach(button =>
  button.addEventListener('click', (event) =>
    updateDisplayVal(parseInt(event.target.innerText))
  )
)

operators.forEach(button =>
   button.addEventListener('click', (event) => performOperation(event.target.id))
 )

document.addEventListener('keydown', (event) => keydownFunction(event.key) )

clrBtn.addEventListener('click', () => clearDisplay())

bksp.addEventListener('click', () => backspace())

decimal.addEventListener('click', () => addDecimal())

plusMinus.addEventListener('click', () => flipSign())

// Color theme change

const row1 = Array.from(document.getElementsByClassName("row-1"))
const row2 = Array.from(document.getElementsByClassName("row-2"))
const row3 = Array.from(document.getElementsByClassName("row-3"))
const row4 = Array.from(document.getElementsByClassName("row-4"))
const row5 = Array.from(document.getElementsByClassName("row-5"))

const radios = document.getElementsByName("color-theme")

Array.from(radios).forEach(radio =>
  radio.addEventListener('click', (event) => changeColor(event))
)

changeColor = (event) => {
  switch(event.target.value) {
    case "Classic":
      row1.forEach(el => el.style.backgroundColor = 'rgb(208, 208, 208)');
      row2.forEach(el => el.style.backgroundColor = 'rgb(220, 219, 220)');
      row3.forEach(el => el.style.backgroundColor = 'rgb(220, 219, 220)');
      row4.forEach(el => el.style.backgroundColor = 'rgb(220, 219, 220)');
      row5.forEach(el => el.style.backgroundColor = 'rgb(220, 219, 220)');
      operators.forEach(el => el.style.backgroundColor = 'rgb(246, 135, 44)');
      allBtn.forEach(el => el.style.color = 'black');
      break;
    case "Beach":
      row1.forEach(el => el.style.backgroundColor = 'rgb(204, 101, 77)');
      row2.forEach(el => el.style.backgroundColor = 'rgb(207, 176, 159)');
      row3.forEach(el => el.style.backgroundColor = 'rgb(207, 176, 159)');
      row4.forEach(el => el.style.backgroundColor = 'rgb(53, 217, 149)');
      row5.forEach(el => el.style.backgroundColor = 'rgb(53, 217, 149)');
      operators.forEach(el => el.style.backgroundColor = 'rgb(204, 101, 77)');
      allBtn.forEach(el => el.style.color = 'black');
      break;
    case "Forest":
      row1.forEach(el => el.style.backgroundColor = 'rgb(3, 99, 40)');
      row3.forEach(el => el.style.backgroundColor = 'rgb(4, 117, 2)');
      row2.forEach(el => el.style.backgroundColor = 'rgb(50, 205, 50)');
      row4.forEach(el => el.style.backgroundColor = 'rgb(31, 128, 31)');
      row5.forEach(el => el.style.backgroundColor = 'rgb(197, 246, 100)');
      operators.forEach(el => el.style.backgroundColor = 'rgb(128, 60, 20))');
      allBtn.forEach(el => el.style.color = 'yellow');
      break;
    case "80s Neon":
      row1.forEach(el => el.style.backgroundColor = 'rgb(247, 43, 238)');
      row2.forEach(el => el.style.backgroundColor = 'rgb(49, 215, 255)');
      row3.forEach(el => el.style.backgroundColor = 'rgb(253, 253, 7)');
      row4.forEach(el => el.style.backgroundColor = 'rgb(255, 28, 117)');
      row5.forEach(el => el.style.backgroundColor = 'rgb(31, 255, 77)');
      operators.forEach(el => el.style.backgroundColor = 'rgb(247, 43, 238)');
      allBtn.forEach(el => el.style.color = 'black');
      break;
    case "Dark":
    console.log("Dark selected")
      row1.forEach(el => el.style.backgroundColor = 'black');
      row2.forEach(el => el.style.backgroundColor = 'black');
      row3.forEach(el => el.style.backgroundColor = 'black');
      row4.forEach(el => el.style.backgroundColor = 'black');
      row5.forEach(el => el.style.backgroundColor = 'black');
      operators.forEach(el => el.style.backgroundColor = 'black');
      allBtn.forEach(el => el.style.color = 'white');
      break;
    case "Mermaid":
    console.log("Mermaid selected")
      row1.forEach(el => el.style.backgroundColor = 'rgb(194, 255, 197)');
      row2.forEach(el => el.style.backgroundColor = 'rgb(161, 251, 214)');
      row3.forEach(el => el.style.backgroundColor = 'rgb(176, 221, 249)');
      row4.forEach(el => el.style.backgroundColor = 'rgb(177, 197, 252)');
      row5.forEach(el => el.style.backgroundColor = 'rgb(211, 195, 255)');
      operators.forEach(el => el.style.backgroundColor = 'rgb(236, 241, 215)');
      allBtn.forEach(el => el.style.color = 'black');
      break;
    case "Citrus":
      row1.forEach(el => el.style.backgroundColor = 'rgb(75, 179, 12)');
      row2.forEach(el => el.style.backgroundColor = 'rgb(180, 207, 104)');
      row3.forEach(el => el.style.backgroundColor = 'rgb(230, 207, 77)');
      row4.forEach(el => el.style.backgroundColor = 'rgb(244, 148, 42)');
      row5.forEach(el => el.style.backgroundColor = 'rgb(226, 64, 63)');
      operators.forEach(el => el.style.backgroundColor = 'rgb(75, 179, 12)');
      allBtn.forEach(el => el.style.color = 'black');
      break;
  }
}



/////////////////////

updateDisplayWindow();
