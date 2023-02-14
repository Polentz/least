const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`)
};

window.addEventListener("load", () => {
    history.scrollRestoration = "manual";
});

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
    const closeMenuBtns = document.querySelectorAll(".close-btn, .menu-link a");
    const menu = document.querySelector(".menu");
    const menuWrapper = document.querySelector(".menu-wrapper");
    const langBtn = document.querySelector(".lang-btn a");
    const body = document.querySelector("body");

    openBtn.addEventListener("click", () => {
        openBtn.classList.add("scale");
        if (openBtn.classList.contains("scale")) {
            closeBtn.classList.add("--show-element");
        } else {
            closeBtn.classList.remove("--show-element");
        }
        setTimeout(() => {
            body.style.overflowY = "hidden";
            menu.classList.add("--show-element");
        }, 400);
        setTimeout(() => {
            menuWrapper.classList.add("--fade-element");
            langBtn.style.color = "var(--bg-color)";
        }, 600);
    });

    closeMenuBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("click")
            menuWrapper.classList.remove("--fade-element");
            langBtn.style.color = "var(--txt-color)";
            setTimeout(() => {
                openBtn.classList.remove("scale");
                closeBtn.classList.remove("--show-element");
            }, 300);
            setTimeout(() => {
                body.style.overflowY = "scroll";
                menu.classList.remove("--show-element");
            }, 500);
        });
    })
};

const header = () => {
    const topBar = document.querySelector(".header");
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop < lastScrollTop) {
            topBar.classList.remove("--up");
            topBar.classList.add("--down");
        } else {
            topBar.classList.remove("--down");
            topBar.classList.add("--up");
        }
        lastScrollTop = scrollTop;
    }, false);
};

const createChild = () => {
    let div = document.createElement("div");
    div.classList.add("grid-square", "--outline");
    return div;
}

const grid = () => {
    const gridLayout = document.querySelectorAll(".four-columns, .two-columns");
    for (let i = 0; i < gridLayout.length; i++) {
        const parent = gridLayout[i];
        const children = parent.children;
        const childrenArray = Array.from(children);
        childrenArray.forEach(child => {
            if (child.children.length == 0) {
                child.classList.add("--empty");
            };
        });
    };
};

window.addEventListener("resize", documentHeight);
documentHeight();
jsScroll();
menu();
header();
grid();
