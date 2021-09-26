let start = document.querySelector(".start")
let bodyyy = document.querySelector(".all-item")
let random
let buttons = document.querySelectorAll(".item")
start.onclick = function(){
    start.style.display = "none"
    bodyyy.style.display = "flex"
    random = getRandomInRange(0, 4)
}
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

buttons.forEach(function(e, i){
    e.onclick = function(){
        if(i == random){
            alert("Угадал!")
        }
        else{
            alert(`Эх, ты не угадал. Правильный ответ был ${random+1}`)
        }
        start.style.display = "block"
        bodyyy.style.display = "none"
    }
})