const cursor = document.getElementById("cursor");
const links = document.querySelectorAll("a, .menu-btn, .close-btn");

document.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    // let w = document.body.clientWidth;
    // const xP = event.pageX / w * 100;
    // const xX = xP.toFixed(0);
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