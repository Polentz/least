const revealOnScroll = () => {
    const reveals = document.querySelectorAll(".main-content section");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("appear");
        } else {
            reveals[i].classList.remove("appear");
        }
    }
}

const scrollFunctions = () => {
    window.addEventListener("scroll", revealOnScroll);
}

scrollFunctions();