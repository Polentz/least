const cursor = document.getElementById("cursor");
const cursorLinks = document.querySelectorAll(".link");

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
        cursor.style.backgroundColor = "var(--light-blue)";
    } else {
        cursor.style.backgroundColor = "var(--yellow)";
    }
});

cursorLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.width = 96 + "px";
        cursor.style.height = 96 + "px";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.width = 40 + "px";
        cursor.style.height = 40 + "px";
    });
});
