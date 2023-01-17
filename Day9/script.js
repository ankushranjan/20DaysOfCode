var submitButton = document.getElementById("submit-button");
var balanceDisplay = document.getElementById("balance-display");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var balance = Math.floor(Math.random() * 10000);
  balanceDisplay.innerHTML = "Your balance is $" + balance;
});
