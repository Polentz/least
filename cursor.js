const section = document.querySelector(".main")
const cursor = document.getElementById("cursor");
const menuLinks = document.querySelectorAll(".label");
const logo = document.querySelector(".logo");
const lines = document.querySelectorAll(".line");

document.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    let w = document.body.clientWidth;
    const xP = event.pageX / w * 100;
    const xX = xP.toFixed(0);

    if (xX >= 0 + "%" && xX <= 25 + "%") {
        cursor.style.backgroundColor = "#B7E3A3";
    } else if (xX > 25 + "%" && xX <= 50 + "%") {
        cursor.style.backgroundColor = "#D0BBFF";
    } else if (xX > 50 + "%" && xX <= 75 + "%") {
        cursor.style.backgroundColor = "#BBCCE8";
    } else {
        cursor.style.backgroundColor = "#F9F691";
    }
});

menuLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.width = 96 + "px";
        cursor.style.height = 96 + "px";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.width = 40 + "px";
        cursor.style.height = 40 + "px";
    });
});

logo.addEventListener("mouseenter", () => {
    cursor.style.width = 200 + "px";
    cursor.style.height = 200 + "px";
    // lines.forEach(line => {
    //     line.style.strokeDasharray = "550px";
    //     line.style.strokeDashoffset = "550px";
    //     line.style.animation = "3s ease-in 0s 1 alternate-reverse forwards draw-line"

    // });
});
logo.addEventListener("mouseleave", () => {
    cursor.style.width = 40 + "px";
    cursor.style.height = 40 + "px";
});
logo.addEventListener("click", (event) => {
    event.preventDefault();
    lines.forEach(line => {
        line.style.strokeDasharray = "550px";
        line.style.strokeDashoffset = "550px";
        line.style.animation = "3s ease-in 0s 1 alternate-reverse forwards draw-line"

    });
    setTimeout(() => {
        section.classList.add("fade");
    }, 3000);
    setTimeout(() => {
        const href = "apropos.html"
        document.location.href = href
    }, 4000);
});