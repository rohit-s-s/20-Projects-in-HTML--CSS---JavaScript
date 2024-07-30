/**
 * Submits a message and displays a response based on the input validity.
 * 
 * @function submit
 * @description Checks if the input message is valid (not empty) and updates the response element accordingly.
 * 

 * // Example output:
 * // If the input is empty:
 * // <div class="response unvalid">Enter valid input</div>
 * // If the input is not empty:
 * // <div class="response valid">Your Message 'Hello World' has been sent</div>
 */
function submit(){
    const message = document.getElementById("message")
    const response = document.querySelector(".response")
    console.log(message.value)
    if(message.value===""){
        response.textContent="Enter valid input"
        response.classList.remove("valid")
        response.classList.add("unvalid")
        
    }else{
        response.textContent = `Your Message '${message.value}' has been sent `
        response.classList.remove("unvalid")
        response.classList.add("valid")
    }
}
