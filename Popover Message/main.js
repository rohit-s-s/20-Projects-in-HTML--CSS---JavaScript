const container = document.querySelector(".container")
const openBtn = document.querySelector(".open_btn")
const closeBtn = document.querySelector(".close_btn")

openBtn.addEventListener("click",getPopup)
closeBtn.addEventListener("click",getPopup)


function getPopup(){
    container.classList.toggle("visible")
    openBtn.classList.toggle("hidden")

}