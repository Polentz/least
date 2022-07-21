const logo = document.querySelector(".logo");
const logoText = document.querySelector(".logo h2");
const logoUI = document.querySelector(".arrow-down");


logo.addEventListener("mouseenter", () => {
    // cursor.style.width = 200 + "px";
    // cursor.style.height = 200 + "px";
    logoText.style.opacity = 1;
    logoUI.style.opacity = 1;
});
logo.addEventListener("mouseleave", () => {
    // cursor.style.width = 10 + "px";
    // cursor.style.height = 10 + "px";
    logoText.style.opacity = 0;
    logoUI.style.opacity = 0;
});

const pageLinks = [...document.querySelectorAll(".js-scroll")];
function scrollToSection(e) {
    const targetSection = document.getElementById(e.target.dataset.targetSection);
    targetSection.scrollIntoView({ behavior: "smooth" });
}
for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].addEventListener("click", scrollToSection, false);
}