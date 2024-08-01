const keys = document.querySelectorAll(".key")

keys.forEach(key=>{
    const audio = document.createElement("audio")
    audio.setAttribute("src","http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav")
    key.appendChild(audio)
    key.addEventListener("click",()=>{audio.play()}) 
})

