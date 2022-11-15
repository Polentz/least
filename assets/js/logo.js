const logoLettering = document.querySelector(".logo-lettering");
const logoContainer = document.querySelector(".cover");
const animation = sessionStorage.getItem("animation");
let lastScrollTop = 0;

if (animation === "done") {
    logoContainer.classList.remove("animation");
} else {
    sessionStorage.setItem("animation", "done");
    window.addEventListener("load", () => {
        logoContainer.classList.add("animation");
    })
};

logoLettering.addEventListener("click", () => {
    logoContainer.classList.add("animation");
});

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        logoContainer.classList.remove("animation");
        logoContainer.style.zIndex = "1"
    }
    lastScrollTop = scrollTop;
}, false);