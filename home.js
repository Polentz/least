const disegnoPath = document.querySelectorAll(".disegno-path");
const subTitle = document.querySelector(".header p");
const cover = document.getElementById("cover");
const uiComp = document.querySelector(".ui-comp");
const nav = document.querySelector(".primary-nav");


window.addEventListener("load", () => {
    disegnoPath.forEach(line => {
        line.style.strokeDasharray = "1";
        line.style.strokeDashoffset = "1";
        line.style.animation = "drawLine 3s ease-in-out alternate forwards 1";
    });
    setTimeout(() => {
        subTitle.classList.add("appear");
    }, 2000);
    setTimeout(() => {
        uiComp.classList.add("appear");
        nav.classList.add("appear");
    }, 2500);
});

// detect viewport
// const inViewport = (event) => {
//     const elementRect = event.getBoundingClientRect();
//     return (elementRect.top < innerHeight && elementRect.bottom > 0);
// };