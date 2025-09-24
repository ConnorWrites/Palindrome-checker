const textInput = document.getElementById("text-input");
const check = document.getElementById("check-btn");
const result = document.getElementById("result");

check.addEventListener("click", palindrome);

function palindrome() {
  if (textInput.value == ""){
    alert("Please input a value");
    result.innerHTML = "";
    return;
  }
  const processedStr = textInput.value.replace(/[\W_]/g, "").toLowerCase();
  let isPalindrome = true;
  for (let i = 0; i < Math.floor(processedStr.length / 2); i++){
    if (processedStr[i] !== processedStr[processedStr.length - 1 - i]){
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    result.innerHTML = textInput.value + " is a palindrome";
  } else { result.innerHTML = textInput.value + " is not a palindrome";}
}
