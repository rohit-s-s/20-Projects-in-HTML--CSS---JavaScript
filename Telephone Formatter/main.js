const input = document.getElementById("number");

let firstThreeDigits = "";
let restDigits = "";
let result = "";
let previous = "";

input.addEventListener("input", textFormatter);

function textFormatter(e) {
  const inputValue = e.target.value;
  if(inputValue.length === 4 && inputValue.length > previous.length){
    firstThreeDigits = inputValue.substring(0,3)
    const result = `+(${firstThreeDigits})-${inputValue.substring(3)}`
    console.log(result)
    input.value = result
  }else{
    input.value = e.target.value
    console.log(inputValue)
  }
  previous = inputValue
  
}