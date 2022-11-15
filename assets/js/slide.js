const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const scrollContainer = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery img");
const distance = screen.width / 2;

if (scrollContainer) {
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
        });
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
        });
    });
}