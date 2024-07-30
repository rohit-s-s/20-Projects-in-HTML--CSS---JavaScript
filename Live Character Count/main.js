/**
 * Counts the number of characters in a textarea and updates a counter element with the count.
 * 
 * @param {none} - This function does not take any parameters.
 * @returns {none} - This function does not return any value.
 * 
 * 
 * Call `countChar()` to update the counter element with the character count of the textarea.
 */
function countChar(){
    const counter = document.querySelector(".counter")
    const textarea = document.getElementById("input")
    console.log(textarea.value.length)
    counter.innerHTML = textarea.value.length;
}