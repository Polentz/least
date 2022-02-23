// lines animation
const logoPath = document.querySelectorAll(".logo-path");
const disegnoPath = document.querySelectorAll(".disegno-path");
const shadowPath = document.querySelectorAll(".disegno-shadow");
const subTitle = document.querySelector(".header p");
const uiComp = document.querySelector(".ui-comp a");
const circlePath = document.querySelectorAll(".circle-path");

window.addEventListener("load", () => {
    logoPath.forEach(line => {
        line.style.strokeDasharray = "1";
        line.style.strokeDashoffset = "1";
        line.style.animation = "drawLine 2.5s ease-in-out alternate forwards 1";
        setTimeout(() => {
            line.style.animation = "fill 2s ease alternate forwards 1";
            subTitle.classList.add("appear");
        }, 2500);
        setTimeout(() => {
            uiComp.classList.add("appear");
        }, 2800);
    });
    disegnoPath.forEach(line => {
        line.style.strokeDasharray = "1";
        line.style.strokeDashoffset = "1";
        line.style.animation = "drawLine 3s ease-in-out alternate-reverse forwards 1";
        setTimeout(() => {
            line.style.animation = "fillMix 20s ease alternate infinite";
        }, 2500);
    });
    circlePath.forEach(line => {
        line.style.strokeDasharray = "1";
        line.style.strokeDashoffset = "1";
        line.style.animation = "drawLine 5s ease-in-out alternate forwards 1";
    });
    shadowPath.forEach(line => {
        line.style.strokeDasharray = "1";
        line.style.strokeDashoffset = "1";
        line.style.animation = "drawLine 3s ease-in-out forwards 1";
    });
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