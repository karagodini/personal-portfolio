const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
const alternateStyles = document.querySelectorAll(".alternate-style");
const dayNight = document.querySelector(".day-night");
const nav = document.getElementById("btnn");
const section = document.querySelectorAll(".section");

//появление левого меню с цветами
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})


//удаление меню с цветами при скроле
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})


//смена цвета темы
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled","true");
        }
    })
}

//темный фон
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})


//смена цвета кнопки активной страницы
const changeClass = el => {
    for(let i = 0; i < nav.children.length; i++) {
        nav.children[i].classList.remove("active");
    }
    el.classList.add("active");
}

nav.addEventListener("click", e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
})