const cursor = document.getElementById("cursor");
const circles = cursor.querySelectorAll(".cursor");
const cSmall = cursor.querySelectorAll(".due");
const cMedium = cursor.querySelectorAll(".tre");
const allLinks = document.querySelectorAll("a, .open-btn, .close-btn");
let aimX = 0
let aimY = 0


document.addEventListener("mousemove", (event) => {
    let w = document.body.clientWidth;
    let xP = event.pageX / w * 100;
    let xX = xP.toFixed(0);

    if (xX >= 0 + "%" && xX <= 25 + "%") {
        circles.forEach(c => {
            c.style.backgroundColor = "var(--green)";
        })
    } else if (xX > 25 + "%" && xX <= 50 + "%") {
        circles.forEach(c => {
            c.style.backgroundColor = "var(--purple)";
        })
    } else if (xX > 50 + "%" && xX <= 75 + "%") {
        circles.forEach(c => {
            c.style.backgroundColor = "var(--blue)";
        })
    } else {
        circles.forEach(c => {
            c.style.backgroundColor = "var(--yellow)";
        })
    }
});

allLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        circles.forEach(c => {
            c.style.width = 10 + "vw";
            c.style.height = 10 + "vw";
        })
        cMedium.forEach(c => {
            c.style.width = 10 + "vw";
            c.style.height = 10 + "vw";
        })
        cSmall.forEach(c => {
            c.style.width = 10 + "vw";
            c.style.height = 10 + "vw";
        })
    });
    link.addEventListener("mouseleave", () => {
        circles.forEach(c => {
            c.style.width = 6 + "vw";
            c.style.height = 6 + "vw";
        })
        cMedium.forEach(c => {
            c.style.width = 4 + "vw";
            c.style.height = 4 + "vw";
        })
        cSmall.forEach(c => {
            c.style.width = 2 + "vw";
            c.style.height = 2 + "vw";
        })
    });
});

circles.forEach((c, index) => {
    let currentX = 0
    let currentY = 0
    let speed = .8 - index * 0.15
    const animate = function () {
        currentX += (aimX - currentX) * speed
        currentY += (aimY - currentY) * speed
        c.style.left = currentX + "px"
        c.style.top = currentY + "px"
        requestAnimationFrame(animate);
    }
    animate()
})

document.addEventListener("mousemove", (event) => {
    aimX = event.pageX
    aimY = event.pageY
})