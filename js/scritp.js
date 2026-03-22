const langageAll = document.querySelectorAll(".til")

langageAll.forEach((langage)=>{
    langage.addEventListener("click", ()=>{
        langageAll.forEach(el => el.classList.remove("active"))
        langage.classList.add("active")
    })
})