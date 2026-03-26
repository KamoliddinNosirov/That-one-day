const langageAll = document.querySelectorAll(".til")
const like = document.querySelector(".like")
const line = document.querySelector(".line")
const lock = document.querySelector(".lock")
const modal = document.querySelector(".modal")
const hero = document.querySelector(".hero")
const header = document.querySelector("header")
const main = document.querySelector("main")

langageAll.forEach((langage) => {
    langage.addEventListener("click", () => {
        langageAll.forEach(el => el.classList.remove("active"))
        langage.classList.add("active")
    })
})

like.addEventListener("click", () => {
    like.classList.toggle("active")
    line.classList.toggle("active")
})

lock.addEventListener("click", () => {
    modal.classList.add("active")
    setTimeout(() => {
        hero.classList.add("remove")
    }, 500);
    setTimeout(() => {
        header.classList.add("active")
        main.classList.add("active")
    }, 800)
    setTimeout(() => {
        modal.classList.add("remove")
    }, 1000);
})