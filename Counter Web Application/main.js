/**
 * A self-invoking anonymous function that creates a counter functionality.
 *
 * This function selects the counter element, container element, and increment/decrement buttons.
 * It then adds event listeners to the buttons to increment or decrement the counter.
 * The counter value is updated in real-time, and the container's class is updated based on the counter value.
 **/

(function(){
    let count = 0;
    const counter = document.getElementById("counter");
    const container = document.querySelector(".counter-container");
    const btns = document.querySelectorAll('.btn');
    btns.forEach(function(btn){
        btn.addEventListener("click",function(){
            if(btn.classList.contains("increment")){
                count++;
            }else if(btn.classList.contains("decrement")){
                count--;
            }
        

    counter.textContent = count
    if(count>0){
        container.classList.add("positive")
        container.classList.remove("negetive")
    }else if(count<0){
        container.classList.add("negetive")
        container.classList.remove("positive")
    }else{
        container.classList.remove("positive")
        container.classList.remove("negetive")
    }
    })
})

})();