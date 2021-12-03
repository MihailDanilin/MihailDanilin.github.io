const slides = document.querySelectorAll(".slide")
slides.forEach((el) => {
    el.addEventListener("click", () => {
        clearClass()
        el.classList.add("active")
    })
})
function clearClass(){
    slides.forEach((el) => {
        el.className = "slide"
    })
}