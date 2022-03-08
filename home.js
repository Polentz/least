
const disegnoPath = document.querySelectorAll(".disegno-path");
// const shadowPath = document.querySelectorAll(".disegno-shadow");
// const header = document.querySelector(".header");
const subTitle = document.querySelector(".header p");
const cover = document.getElementById("cover");
// const body = document.querySelector(".home");
const uiComp = document.querySelector(".ui-comp");
const nav = document.querySelector(".primary-nav");


window.addEventListener("load", () => {
    // body.style.overflowY = "hidden";
    disegnoPath.forEach(line => {
        line.style.strokeDasharray = "1";
        line.style.strokeDashoffset = "1";
        line.style.animation = "drawLine 3s ease-in-out alternate-reverse forwards 1";
    });
    // shadowPath.forEach(line => {
    //     line.style.strokeDasharray = "1";
    //     line.style.strokeDashoffset = "1";
    //     line.style.animation = "drawLine 3.5s ease-in-out reverse forwards 1";

    // });
    setTimeout(() => {
        subTitle.classList.add("appear");
    }, 2000);
    setTimeout(() => {
        uiComp.classList.add("appear");
        nav.classList.add("appear");
    }, 2500);
    // setTimeout(() => {
    //     cover.classList.add("fade-out");
    //     body.style.overflowY = "scroll";
    // }, 3500);
});



// slideshow
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const scrollContainer = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery img");
const distance = window.screen.width / 2;

btnLeft.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -distance,
        behavior: "smooth"
    });
    images.forEach(image => {
        image.style.filter = "none"
    });
    window.addEventListener("scroll", () => {
        images.forEach(image => {
            image.style.filter = "grayscale(1)"
        });
    })
})

btnRight.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: distance,
        behavior: "smooth"
    });
    images.forEach(image => {
        image.style.filter = "none";
    });
    window.addEventListener("scroll", () => {
        images.forEach(image => {
            image.style.filter = "grayscale(1)";
        });
    })
});

// detect viewport
const inViewport = (event) => {
    const elementRect = event.getBoundingClientRect();
    return (elementRect.top < innerHeight && elementRect.bottom > 0);
};