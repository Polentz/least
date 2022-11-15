// doc height

const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
}
window.addEventListener("resize", documentHeight)
documentHeight()

// cursor

const cursor = document.getElementById("cursor");
const allLinks = document.querySelectorAll("a, .menu-btn, .close-btn");
// const squareImages = document.querySelectorAll(".--square");

document.addEventListener("mousemove", (event) => {
    let x = event.pageX;
    let y = event.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    let w = document.body.clientWidth;
    const xP = event.pageX / w * 100;
    const xX = xP.toFixed(0);
});

allLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.width = 112 + "px";
        cursor.style.height = 112 + "px";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.width = 10 + "px";
        cursor.style.height = 10 + "px";
    });
});

// squareImages.forEach(element => {
//     let width = element.clientWidth;
//     let height = element.clientHeight;

//     element.addEventListener("mouseenter", () => {
//         cursor.style.width = width + "px";
//         cursor.style.height = height + "px";
//     });
//     element.addEventListener("mouseleave", () => {
//         cursor.style.width = 10 + "px";
//         cursor.style.height = 10 + "px";
//     });
// });

// menu

const openMenu = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const menuLabel = document.querySelector(".menu-trigger");
const langBtn = document.querySelector(".lang a");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".menu-link a");

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
    }, 600);
});

menuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        openMenu.classList.remove("scale");
        menu.classList.remove("open");
        closeMenu.classList.remove("visible");

        setTimeout(() => {
            body.style.overflowY = "scroll";
        }, 200);

        setTimeout(() => {
            menuLabel.classList.remove("change");
            menuLabel.innerHTML = "Menu";
            langBtn.style.color = "var(--txt-color)";
        }, 600);

        if (link.hasAttribute("href")) {
            const url = link.getAttribute("href");
            document.location.href = url;
        } else {
            return true;
        }
    });
});

// header

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

// slide

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const scrollContainer = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery img");
const distance = screen.width / 2;

if (scrollContainer) {
    btnLeft.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: -distance,
            behavior: "smooth"
        });
        images.forEach(image => {
            image.style.filter = "none"
        });
        window.addEventListener("scroll", () => {
            images.forEach(image => {
                image.style.filter = "grayscale(1)"
            });
        });
    })
    btnRight.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: distance,
            behavior: "smooth"
        });
        images.forEach(image => {
            image.style.filter = "none";
        });
        window.addEventListener("scroll", () => {
            images.forEach(image => {
                image.style.filter = "grayscale(1)";
            });
        });
    });
}


// home 

const logo = document.querySelector(".logo");
const logoText = document.querySelector(".logo h2");
const logoUI = document.querySelector(".arrow-down");
const pageLinks = [...document.querySelectorAll(".js-scroll")];

if (logo) {
    logo.addEventListener("mouseenter", () => {
        logoText.style.opacity = 1;
        logoUI.style.opacity = 1;
    });
    logo.addEventListener("mouseleave", () => {
        logoText.style.opacity = 0;
        logoUI.style.opacity = 0;
    });
}

if (pageLinks) {
    function scrollToSection(e) {
        const targetSection = document.getElementById(e.target.dataset.targetSection);
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
    for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].addEventListener("click", scrollToSection, false);
    }
}

// const showCover = sessionStorage.getItem("cover");
// const homeCover = document.querySelector(".cover");

// const backHome = document.getElementById("back-home");
// when this link is clicked, removeItem from sessionStorage
// const linkHome = document.querySelectorAll("a:not(.back-home)");

// if (showCover === "shown") {
//     homeCover.style.display = "none";
// } else {
//     sessionStorage.setItem("cover", "shown");
//     homeCover.style.display = "block";
// }


