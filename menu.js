const openMenu = document.querySelector(".open-menu");
const openBtn = document.querySelector(".open-btn");
const closeMenu = document.querySelector(".close-menu");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const menuLabel = document.querySelector(".nav-label");
const menuLinks = document.querySelectorAll(".menu-wrapper a");

openMenu.addEventListener("click", () => {
    openBtn.classList.add("scale");
    setTimeout(() => {
        menu.classList.add("open");
    }, 500);
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("open");
    setTimeout(() => {
        openBtn.classList.remove("scale");
    }, 500);
});

menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        menu.classList.remove("open");
        setTimeout(() => {
            openBtn.classList.remove("scale");
        }, 500);
        const url = link.getAttribute("href");
        setTimeout(() => {
            document.location.href = url;
        }, 1500);
    });
});










