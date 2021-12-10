let plate = document.querySelector(".plate")

let numB = 408
let colors = ["#31AD94", "#F378FA", "#5FFADB", "#FACB34", "#6B64FA"]
for(let i = 0; i<numB; i++){
    let div = document.createElement("div")
    div.classList.add("button")
    div.addEventListener("mouseover", () => {
        setColor(div)
    })
    div.addEventListener("mouseleave", () => {
        greyColor(div)
    })
    plate.append(div)
}
function setColor(e){
    e.style.backgroundColor = colors[getNum()]
    e.style.boxShadow = `0 0 2px ${colors[getNum()]}, 0 0 10px ${colors[getNum()]}`
}
function getNum(){
    return Math.floor(Math.random()*colors.length)
}
function greyColor(e){
    e.style.backgroundColor = "rgb(66, 57, 57)"
    e.style.boxShadow = "0 0 2px black"
}