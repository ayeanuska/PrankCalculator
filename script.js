//create a function to get the value out of the button
// add event listener to cick to trigger the function
// read the valuee of the Button
// store all the value coming from clicking in a global varialbel
// create a function will take the value for global variable and display in the display element

let strToDisplay = "";
const displayELm = document.querySelector(".display");

const operators = "%/*-+";
let lastOperator = "";

//select all the butons

const btns = document.querySelectorAll(".btn");
const audio = new Audio("./assets/pranksound.mp3");

const calculatorOperation = (val) => {
  displayELm.style.background = "";
  displayELm.style.color = "";
  displayELm.classList.remove("prank");

  if (val === "AC") {
    strToDisplay = "";
    display();
    return;
  }

  if (val === "=" || val === "Enter") {
    const lastChar = strToDisplay[strToDisplay.length - 1];

    if (operators.includes(lastChar)) {
      removeLastChar();
    }
    return total();
  }

  if (val === "C" || val === "Backspace") {
    removeLastChar();
    return display(strToDisplay);
  }

  if (operators.includes(val)) {
    lastOperator = val;
    const lastChar = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastChar)) {
      removeLastChar();
    }
  }

  if (val === ".") {
    //when there is an operators
    const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator);
    const lastNumberSet = strToDisplay.slice(indexOfLastOperator);

    if (lastNumberSet.includes(".")) return;

    // when there is not operator
    if (!lastOperator && strToDisplay.includes(".")) return;
  }

  strToDisplay += val;
  display(strToDisplay);
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;
    calculatorOperation(val);
  });
});

const display = (str) => {
  displayELm.innerText = str || "0.00";
};

const total = () => {
  if (!strToDisplay.length) return;

  const extraVal = randomNumber();
  if (extraVal) {
    displayELm.style.background = "red";
    displayELm.style.color = "black";
    displayELm.classList.add("prank");
    audio.play();
  }

  try {
    const ttl = eval(strToDisplay) + extraVal; //not recommended to us anywhere the client can pass data.
    strToDisplay = ttl.toString();
    display(ttl);
  } catch (e) {
    alert("Invalid Expression");
  }
};

//creating random generator.

const randomNumber = () => {
  const num = Math.round(Math.random() * 10); //0-10
  return num < 6 ? num : 0;
};

document.addEventListener("keydown", (e) => {
  const val = e.key;

  if (e.code.includes("Key") || val === "Shift") {
    return;
  }
  if (e.code.includes("Digit")) {
    console.log("its a number");
  }
  calculatorOperation(val);
});

console.log(typeof val);

// //optimization
// const removeLastChar() =>
const removeLastChar = () => {
  strToDisplay = strToDisplay.slice(0, -1);
};

const handleOnDotPress = () => {};
