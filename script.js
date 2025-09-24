let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");
let clear = document.getElementById("clear-btn");

checkBtn.addEventListener('click', palindrome);

textInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    palindrome();
  }
});

function palindrome() {
  if (textInput.value === "") {
    alert("Please input a value");
    result.innerText = "";
    return;
  }

  const processedStr = textInput.value.replace(/[\W_]/g, "").toLowerCase();
  const reversedStr = processedStr.split("").reverse().join("");

  if (processedStr === reversedStr) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
}

clear.addEventListener('click', () => {
  result.innerText = "";
  textInput.value = "";
});
