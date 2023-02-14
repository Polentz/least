const cursor = document.getElementById("cursor");
const links = document.querySelectorAll("a, .menu-btn, .close-btn, .filter-btn, .all-media-btn, .media-label, .card-back a, .media-card .card-back, .media-content-close, .audio-player svg, .seek-slider");

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