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
    } else if (value == '.' && !text.includes(".")) {
        display.value = text + value;
      } else if (value == '+' || value == '-' || value == '*' || value == '/') {
        operator = value;
        num1 = parseFloat(text);
        display.value = '';
      } else if (value == '=') {
        num2 = parseFloat(text);
        let result = eval(num1 + " " + operator + " " + num2);
        display.value = result;
      } else {
        display.value = text + value;
      }
    });
  }
  