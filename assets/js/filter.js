const filterBtns = document.querySelectorAll(".filter-btn");
const filterClear = document.getElementById("all-media");
const mediaLabels = document.querySelectorAll(".media-label");
const mediaContent = document.querySelectorAll(".media-content");
const mediaContentClose = document.querySelectorAll(".media-content-close")

filterBtns.forEach(btn => {
    btn.addEventListener("click", (element) => {
        applyFilter(element, btn);
        mediaLabels.forEach(label => {
            label.classList.remove("highlight");
        });
    });
    btn.addEventListener("mouseenter", (element) => {
        highlightItemPerFilter(element);
    });
    btn.addEventListener("mouseleave", () => {
        mediaLabels.forEach(label => {
            label.classList.remove("highlight");
        });
    });
});

filterClear.addEventListener("click", () => {
    removeFilters();
});

mediaLabels.forEach(label => {
    label.addEventListener("click", (element) => {
        selectContent(element, label);
        scrollStickyElement();
    });
});

mediaContentClose.forEach(btn => {
    btn.addEventListener("click", () => {
        unselectContent();
    });

})

const highlightItemPerFilter = (element) => {
    const filterName = element.currentTarget.dataset.filter;
    mediaLabels.forEach(media => {
        const mediaCategoryTag = media.dataset.category;
        if (mediaCategoryTag.includes(filterName)) {
            media.classList.add("highlight");
        } else {
            media.classList.remove("highlight");
        };
    });
};

const applyFilter = (element, btn) => {
    filterBtns.forEach(btn => {
        btn.classList.remove("filtered");
    });
    filterClear.style.display = "block";
    mediaContent.forEach(content => {
        if (content.classList.contains("show-content")) {
            content.classList.remove("show-content");
        }
    });
    const filterName = element.currentTarget.dataset.filter;
    mediaLabels.forEach(media => {
        media.classList.remove("selected");
        const mediaCategoryTag = media.dataset.category;
        if (mediaCategoryTag.includes(filterName)) {
            media.classList.remove("unfiltered");
            media.classList.add("filtered");
            btn.classList.add("filtered");
        } else {
            media.classList.add("unfiltered");
        };
    });
};

const removeFilters = () => {
    filterBtns.forEach(btn => {
        btn.classList.remove("filtered");
    });
    mediaLabels.forEach(media => {
        media.classList.remove("unfiltered");
        media.classList.remove("filtered");
        media.classList.remove("selected");
    });
    mediaContent.forEach(content => {
        content.classList.remove("show-content");
    });
    filterClear.style.display = "none";
};

const selectContent = (element, label) => {
    mediaLabels.forEach(label => {
        label.classList.remove("selected");
    });
    const contentTag = element.currentTarget.dataset.name;
    mediaContent.forEach(content => {
        const contentName = content.dataset.name;
        if (contentName.includes(contentTag)) {
            label.classList.add("selected");
            content.classList.add("show-content");
            content.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            content.classList.remove("show-content");
            mediaLabels.forEach(label => {
                label.classList.remove("filtered");
            });
        };
    });
};

const unselectContent = () => {
    mediaContent.forEach(content => {
        if (content.classList.contains("show-content")) {
            content.classList.remove("show-content");
            // const spotifyEmbedWindow = document.querySelector('iframe[src*="spotify.com/embed"]').contentWindow;
            // spotifyEmbedWindow.postMessage({ command: 'destroy' }, '*');
            // const spotifyEmbedWindow = document.getElementById("embed-iframe");
            // spotifyEmbedWindow.togglePlay();
        };
        const audios = document.querySelectorAll("audio");
        for (let i = 0; i < audios.length; i++) {
            const audio = audios[i];
            if (audio.played) {
                audio.pause();
            }
        }
    });
    mediaLabels.forEach(label => {
        if (label.classList.contains("selected")) {
            label.classList.remove("selected");
        }
    });
}

const scrollStickyElement = () => {
    const stickyElement = document.querySelector(".selected");
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop < lastScrollTop) {
            setTimeout(() => {
                stickyElement.style.top = "var(--header)";
            }, 300);
        } else {
            stickyElement.style.top = "0";
        }
        lastScrollTop = scrollTop;
    }, false);
}