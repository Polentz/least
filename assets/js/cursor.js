const cursor = document.getElementById("cursor");
const links = document.querySelectorAll("a, .menu-btn, .close-btn, .filter-btn, .media-label, .card, .media-content-close, .audio-player svg, .seek-slider");
const allImages = document.querySelectorAll(".grid-square img");

document.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.width = 112 + "px";
        cursor.style.height = 112 + "px";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.width = 10 + "px";
        cursor.style.height = 10 + "px";
    });
});