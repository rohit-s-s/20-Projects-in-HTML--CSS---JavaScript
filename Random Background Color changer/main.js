 const container = document.querySelector(".container")
 container.addEventListener("click",randomclr)
 
 function randomclr(){
    const random = Math.random()
    const color =  `#${Math.ceil(random*1000000)}`
    container.style.backgroundColor = color
 }
 
