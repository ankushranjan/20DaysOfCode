const submitBtn = document.getElementById("submit-btn");
const accountNumber = document.getElementById("account-number");
const balanceDiv = document.getElementById("balance");

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  let accountNum = accountNumber.value;
  let balance = getBalance(accountNum);
  balanceDiv.innerHTML = `Your balance is: $${balance}`;
});

function getBalance(accountNum) {
  // Dummy balance checker function
  let balance = 0;
  if (accountNum === "12345") {
    balance = 1000;
  } else if (accountNum === "67890") {
    balance = 2000;
  } else {
    balance = "Invalid account number.";
  }
  return balance;
}