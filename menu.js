const openMenu = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const menuLabel = document.querySelector(".menu-trigger");
const langBtn = document.querySelector(".lang a");
const body = document.querySelector("body");
const linkMenu = document.querySelectorAll(".menu-link a");

openMenu.addEventListener("click", () => {
    openMenu.classList.add("scale");
    if (openMenu.classList.contains("scale")) {
        closeMenu.classList.add("visible");
    } else {
        closeMenu.classList.remove("visible");
    }
    setTimeout(() => {
        menu.classList.add("open");
        menuLabel.classList.add("change");
        menuLabel.innerHTML = "Close";
        langBtn.style.color = "var(--bg-color)";
    }, 500);
    setTimeout(() => {
        body.style.overflowY = "hidden";
    }, 600);
});

closeMenu.addEventListener("click", () => {
    openMenu.classList.remove("scale");
    menu.classList.remove("open");
    closeMenu.classList.remove("visible");
    setTimeout(() => {
        body.style.overflowY = "scroll";
    }, 200)
    setTimeout(() => {
        menuLabel.classList.remove("change");
        menuLabel.innerHTML = "Menu";
        langBtn.style.color = "var(--txt-color)";
    }, 800);
});

linkMenu.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        openMenu.classList.remove("scale");
        menu.classList.remove("open");
        closeMenu.classList.remove("visible");
        setTimeout(() => {
            body.style.overflowY = "scroll";
        }, 200);
        const url = link.getAttribute("href");
        setTimeout(() => {
            menuLabel.classList.remove("change");
            menuLabel.innerHTML = "Menu";
            langBtn.style.color = "var(--txt-color)";
            document.location.href = url;
        }, 800);
    });
});

let lastAssignedColor;
linkMenu.forEach(link => {
    link.addEventListener("mouseenter", () => {
        let hoverColors = ["var(--green)", "var(--purple)", "var(--blue)", "var(--yellow)"];
        let randomIndex = Math.floor(Math.random() * hoverColors.length);
        let randomColor = hoverColors[randomIndex];
        if (randomColor === lastAssignedColor) {
            const nextIndex = randomIndex + 1 > hoverColors.length - 1 ? 0 : randomIndex + 1;
            randomColor = hoverColors[nextIndex];
        }
        lastAssignedColor = randomColor;
        link.style.color = randomColor;
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "var(--bg-color)";
    });
});

const topBar = document.querySelector(".header");
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        topBar.classList.remove("up");
        topBar.classList.add("down");
    } else {
        topBar.classList.remove("down");
        topBar.classList.add("up");
    }
    lastScrollTop = scrollTop;
}, false);


