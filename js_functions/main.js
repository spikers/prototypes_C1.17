function myMessage() {
  console.log("This is Tim's custom message!")
}

function add(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

var add2Result = add2(10, 55);

function add2(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function cardFlip(element) {
  element.style.display = "none";
}