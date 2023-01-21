let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let operator = '';
let num1 = '';
let num2 = '';

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
    let value = this.getAttribute("value");
    let text = display.value;
  
    if(value == 'C'){
      display.value = '';
      operator = '';
      num1 = '';
      num2 = '';
