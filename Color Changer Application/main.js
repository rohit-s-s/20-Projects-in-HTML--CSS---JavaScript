function randomColor(){
    var random = Math.random()
    random = Math.floor(random*1000000)
    var color = ("#"+random)
    document.getElementById('circle').style.backgroundColor = color

}
function paint(color){
    document.getElementById('circle').style.backgroundColor = color
}