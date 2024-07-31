const amount = document.querySelector(".amount")
const rate = document.querySelector(".rate")
const time = document.querySelector(".time")
const result = document.querySelector(".result")

const form = document.querySelector(".formElm")
form.addEventListener("submit",(e)=>calculateIntrest(e))


function calculateIntrest(e){
    e.preventDefault();
    console.log(amount.value*rate.value*time.value)
    const intrest = amount.value*rate.value*time.value
    result.innerHTML = `Your Intrest Amount is : ${intrest} Rs`
}
