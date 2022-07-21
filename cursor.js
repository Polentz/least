const cursor = document.getElementById("cursor");
const allLinks = document.querySelectorAll("a, .menu-btn, .close-btn");

document.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    let w = document.body.clientWidth;
    const xP = event.pageX / w * 100;
    const xX = xP.toFixed(0);

    if (xX >= 0 + "%" && xX <= 25 + "%") {
        cursor.style.backgroundColor = "var(--green)";
    } else if (xX > 25 + "%" && xX <= 50 + "%") {
        cursor.style.backgroundColor = "var(--purple)";
    } else if (xX > 50 + "%" && xX <= 75 + "%") {
        cursor.style.backgroundColor = "var(--blue)";
    } else {
        cursor.style.backgroundColor = "var(--yellow)";
    }
});

allLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.width = 112 + "px";
        cursor.style.height = 112 + "px";
        // cursor.style.filter = "blur(2px)";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.width = 10 + "px";
        cursor.style.height = 10 + "px";
        // cursor.style.filter = "none"
    });
});


