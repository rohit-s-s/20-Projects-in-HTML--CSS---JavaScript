const cursor = document.querySelector(".cursor")
const body = document.querySelector("body")
const texts = document.querySelectorAll(".text")

body.addEventListener("mousemove", (event) => getCursor(event))

texts.forEach(text => {
    text.addEventListener("mouseenter", (event) => changeCursor(event))
    text.addEventListener("mouseleave", (event) => changeCursor(event))
})

function getCursor(event) {
    let x = event.clientX
    let y = event.clientY
    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
}

function changeCursor(event) {
    cursor.classList.toggle("new-cursor")
    event.target.classList.toggle("new-text")
}
