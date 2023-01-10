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

    closeBtn.addEventListener("click", () => {
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
    const gridLayout = document.querySelectorAll(".grid-layout");
    for (let i = 0; i < gridLayout.length; i++) {
        const parent = gridLayout[i];
        const children = parent.children;
        const childrenArray = Array.from(children);

        if (parent.children.length != 2) {
            for (let i = parent.children.length; i < 4; i++) {
                parent.appendChild(createChild());
            };
        };
        const childrenLength = parent.children.length;
        console.log(childrenLength);
        // const multiplesOf = (numbers, number) => numbers.filter(n => !(n % number));

        if (parent.children.length == 2) {
            parent.classList.add("two-columns");
            childrenArray.forEach(child => {
                child.classList.add("grid-block");
                if (child.children.length == 0) {
                    child.classList.add("--empty");
                };
            });
        } else if (parent.children.length == 4) {
            parent.classList.add("four-columns");
            childrenArray.forEach(child => {
                child.classList.add("grid-square");
                if (child.children.length == 0) {
                    child.classList.add("--empty");
                };
            });
        };
    };
};

// window.onSpotifyIframeApiReady = (IFrameAPI) => {
//     let element = document.getElementById('embed-iframe');
//     let options = {
//         uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
//     };
//     let callback = (EmbedController) => {
//         document.querySelectorAll('ul#episodes > li > button').forEach(
//             episode => {
//                 episode.addEventListener('click', () => {
//                     EmbedController.loadUri(episode.dataset.spotifyId)
//                 });
//             })
//     };
//     IFrameAPI.createController(element, options, callback);
// };

// window.onSpotifyIframeApiReady = (IFrameAPI) => {
//     const embedded = document.querySelectorAll(".embed-spotify");
//     embedded.forEach(element => {
//         if (element.id === element.dataset.url) {
//             let options = {
//                 uri: element.dataset.url
//             };
//             IFrameAPI.createController(element, options);
//         }

//     });
//     // let element = document.getElementById("embed-iframe");
//     // let options = {
//     //     uri: element.dataset.url
//     // };
//     // // console.log(elementUri)
//     // // let callback = (EmbedController) => { };
//     // IFrameAPI.createController(element, options);
// };

window.addEventListener("resize", documentHeight);
documentHeight();
jsScroll();
menu();
header();
grid();




