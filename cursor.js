const cursor = document.getElementById("cursor");
const allLinks = document.querySelectorAll("a");

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
        cursor.style.backgroundColor = "var(--orange)";
    }
});

allLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.width = 10 + "vw";
        cursor.style.height = 10 + "vw";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.width = 6 + "vw";
        cursor.style.height = 6 + "vw";
    });
});
