// const section = document.querySelector(".main");
const homeLinks = document.querySelectorAll(".js-link");
const logo = document.querySelector(".logo");
const logoText = document.querySelector(".logo h2");
const lines = document.querySelectorAll(".line");

homeLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        lines.forEach(line => {
            line.style.strokeDasharray = "550px";
            line.style.strokeDashoffset = "550px";
            line.style.animation = "3s ease-in 0s 1 alternate-reverse forwards draw-line"
        });
        // setTimeout(() => {
        //     section.classList.add("fade-out");
        // }, 3000);
        const url = link.getAttribute("href");
        setTimeout(() => {
            document.location.href = url;
        }, 4000);
    });
});

logo.addEventListener("mouseenter", () => {
    cursor.style.width = 200 + "px";
    cursor.style.height = 200 + "px";
    logoText.style.opacity = 1;
});
logo.addEventListener("mouseleave", () => {
    cursor.style.width = 40 + "px";
    cursor.style.height = 40 + "px";
    logoText.style.opacity = 0;
});

logo.addEventListener("click", (event) => {
    event.preventDefault();
    lines.forEach(line => {
        line.style.strokeDasharray = "550px";
        line.style.strokeDashoffset = "550px";
        line.style.animation = "3s ease-in 0s 1 alternate-reverse forwards draw-line"
    });
    // setTimeout(() => {
    //     section.classList.add("fade-out");
    // }, 3000);
    setTimeout(() => {
        const href = "apropos.html"
        document.location.href = href
    }, 3000);
});

// window.addEventListener("mousemove", (event) => {
//     event.preventDefault();
//     lines.forEach(line => {
//         line.style.strokeDasharray = "550px";
//         line.style.strokeDashoffset = "550px";
//         line.style.animation = "3s ease-in 0s 1 alternate-reverse forwards draw-line"
//     });
//     setTimeout(() => {
//         const href = "apropos.html"
//         document.location.href = href
//     }, 3000);
// });