const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*", "/","-","+","="];
let output = "";

//define function to calculate based on button clicked

const calculate = (btnValue) => {
  if(btnValue === "=" && output !== ""){
    // if output has '%' replace with '100' before evaluating.
    output = eval(output.replace("%","/100"));
  }else if (btnValue === "AC"){
    output = "";
  } else if (btnValue === "DEL") {
    // If DEL button  is clicked , rwmove the last character from the output.
    output = output.toString().slice(0,-1);
  }else{
     
    // if outputb is empty and button is Specialcharcter then return
    if(output === "" && specialChars.includes(btnValue)) return;
  }
    display.value = output;
  };

// add event listener to buttons , all calculated() on click

buttons.forEach(( button) => {

  // button click listener calls calculate() with datas (parameter) e: MouseEvent
   button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});