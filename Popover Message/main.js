const button = document.querySelector(".btn")
button.addEventListener("click", popUp)

const container = button.parentElement;
console.log(container)

function popUp(){
    // const header = document.createElement("h1");
    // header.textContent = "Message"
    // const message = document.createElement("p")
    // message.textContent = "Hello, World!";
    button.textContent = "Close";
    
    // container.appendChild(header)
    // container.appendChild(message)

}