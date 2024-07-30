 function randomclr(){
    const random = Math.random()
    const color =  `#${Math.ceil(random*1000000)}`
    const element = document.querySelector(".box")
    const text = document.querySelector(".color-code")
    element.style.backgroundColor = color
    text.textContent = color
 }
 
