//create a function to get the value out of the button
// add event listener to cick to trigger the function
// read the valuee of the Button
// store all the value coming from clicking in a global varialbel
// create a function will take the value for global variable and display in the display element

let strToDisplay = "";
const displayELm = document.querySelector(".display");

const operators = "%/*-+";

//select all the butons
debugger;
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      display();
      return;
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, 1);
      }

      return total();
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (operators.includes(val)) {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    // strToDisplay += val;
    // display(strToDisplay);

    strToDisplay = strToDisplay + val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayELm.innerText = str || "0.00";
};

const total = () => {
  if (!strToDisplay.length) return;

  const ttl = eval(strToDisplay); //not recommended to us anywhere the client can pass data.
  strToDisplay = ttl.toString();
  display(ttl);
};
