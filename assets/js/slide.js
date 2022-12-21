const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const scrollContainer = document.querySelector(".gallery-block");
const images = document.querySelectorAll(".image-wrapper img");
const distance = screen.width / 2;

if (scrollContainer) {
    btnLeft.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: -distance,
            behavior: "smooth"
        });
        images.forEach(image => {
            image.classList.add("--grayscale");
        });
        window.addEventListener("scroll", () => {
            images.forEach(image => {
                image.classList.remove("--grayscale");
            });
        });
    })
    btnRight.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: distance,
            behavior: "smooth"
        });
        images.forEach(image => {
            image.classList.add("--grayscale");
        });
        window.addEventListener("scroll", () => {
            images.forEach(image => {
                image.classList.remove("--grayscale");
            });
        });
    });
}