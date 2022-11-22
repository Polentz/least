const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
};

const scrollIntoView = (e) => {
    const targetSection = document.getElementById(e.target.dataset.targetSection);
    targetSection.scrollIntoView({
        behavior: "smooth"
    });
};

const jsScroll = () => {
    const pageLinks = document.querySelectorAll(".js-scroll");
    for (let i = 0; i < pageLinks.length; i++) {
        const pagelink = pageLinks[i];
        pagelink.addEventListener("click", scrollIntoView, false);
    }
};

const menu = () => {
    const openBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const menu = document.querySelector(".menu");
    const menuWrapper = document.querySelector(".menu-wrapper");
    const langBtn = document.querySelector(".lang a");
    const body = document.querySelector("body");

    openBtn.addEventListener("click", () => {
        openBtn.classList.add("scale");
        if (openBtn.classList.contains("scale")) {
            closeBtn.classList.add("visible");
        } else {
            closeBtn.classList.remove("visible");
        }
        setTimeout(() => {
            body.style.overflowY = "hidden";
            menu.classList.add("visible");
        }, 400);
        setTimeout(() => {
            menuWrapper.classList.add("fade-in");
            langBtn.style.color = "var(--bg-color)";
        }, 600);
    });

    closeBtn.addEventListener("click", () => {
        menuWrapper.classList.remove("fade-in");
        langBtn.style.color = "var(--txt-color)";
        setTimeout(() => {
            openBtn.classList.remove("scale");
            closeBtn.classList.remove("visible");
        }, 300);
        setTimeout(() => {
            body.style.overflowY = "scroll";
            menu.classList.remove("visible");
        }, 500);
    });
};

const header = () => {
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
};

window.addEventListener("resize", documentHeight);
documentHeight();
jsScroll();
menu();
header();




