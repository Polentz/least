const menuCursor = document.getElementById("cursor");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const logoStatic = document.querySelector(".logo-static");
// const section = document.querySelector(".main");
const menuLinks = document.querySelectorAll(".js-link");
const menuLabel = document.querySelector(".menu-trigger");

menuBtn.addEventListener("mouseenter", () => {
    menuCursor.style.width = 96 + "px";
    menuCursor.style.height = 96 + "px";
});
menuBtn.addEventListener("mouseleave", () => {
    menuCursor.style.width = 40 + "px";
    menuCursor.style.height = 40 + "px";
});

menuBtn.addEventListener("click", () => {
    menuBtn.classList.add("scale");
    if (menuBtn.classList.contains("scale")) {
        menuCursor.style.mixBlendMode = "difference";
    } else {
        menuCursor.style.mixBlendMode = "multiply";
    }
    menu.classList.add("open");
    setTimeout(() => {
        menuLabel.classList.add("change");
        menuLabel.innerHTML = "Close";
    }, 500);
});

closeBtn.addEventListener("click", () => {
    menuBtn.classList.remove("scale");
    menu.classList.remove("open");
    menuCursor.style.mixBlendMode = "multiply";
    setTimeout(() => {
        menuLabel.classList.remove("change");
        menuLabel.innerHTML = "Menu";
    }, 800);
});

closeBtn.addEventListener("mouseenter", () => {
    menuCursor.style.width = 96 + "px";
    menuCursor.style.height = 96 + "px";
});
closeBtn.addEventListener("mouseleave", () => {
    menuCursor.style.width = 40 + "px";
    menuCursor.style.height = 40 + "px";
});

logoStatic.addEventListener("mouseenter", () => {
    cursor.style.width = 200 + "px";
    cursor.style.height = 200 + "px";
});
logoStatic.addEventListener("mouseleave", () => {
    cursor.style.width = 40 + "px";
    cursor.style.height = 40 + "px";
});

window.onload = functions;

function functions() {
    subMenu(".lectures", ".lectures-menu");
    // subMenu(".artiste-apprenti", ".artiste-apprenti-menu");
}

function subMenu(trigger, subMenu) {
    document.querySelector(trigger).addEventListener("click", (event) => {
        event.preventDefault();
        const menus = document.querySelector(subMenu);
        if (menus.classList.contains("slide-in")) {
            menus.classList.remove("slide-in");
        } else {
            menus.classList.add("slide-in");
        }
    });
}

menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        menuBtn.classList.remove("scale");
        menu.classList.remove("open");
        menuCursor.style.mixBlendMode = "multiply";
        const url = link.getAttribute("href");
        setTimeout(() => {
            document.location.href = url;
        }, 1000);
    });
});










