const filterBtns = document.querySelectorAll(".filter-btn");
const filterClear = document.getElementById("all-media");
const mediaSection = document.querySelectorAll(".cards-section, .filters-section");
const mediaCards = document.querySelectorAll(".media-card");
const mediaContent = document.querySelectorAll(".media-article");
const mediaContentClose = document.querySelectorAll(".media-content-close");

filterBtns.forEach(btn => {
    btn.addEventListener("click", (element) => {
        applyFilter(element, btn);
        mediaCards.forEach(label => {
            label.classList.remove("highlight");
        });
    });
    btn.addEventListener("mouseenter", (element) => {
        highlightItemPerFilter(element);
    });
    btn.addEventListener("mouseleave", () => {
        mediaCards.forEach(label => {
            label.classList.remove("highlight");
        });
    });
});

filterClear.addEventListener("click", () => {
    removeFilters();
});

mediaCards.forEach(label => {
    label.addEventListener("click", (element) => {
        selectContent(element);
    });
});

mediaContentClose.forEach(btn => {
    btn.addEventListener("click", () => {
        unselectContent();
        mediaCards.forEach(label => {
            label.style.display = "flex";
        });
        window.scrollTo(0, 0);
    });

})

const highlightItemPerFilter = (element) => {
    const filterName = element.currentTarget.dataset.filter;
    mediaCards.forEach(media => {
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
    const filterName = element.currentTarget.dataset.filter;
    mediaCards.forEach(media => {
        const mediaCategoryTag = media.dataset.category;
        if (mediaCategoryTag.includes(filterName)) {
            media.classList.remove("unfiltered");
            media.classList.add("filtered");
            btn.classList.add("filtered");
        } else {
            media.classList.add("unfiltered");
            media.classList.remove("filtered");
        };
    });
};

const removeFilters = () => {
    filterBtns.forEach(btn => {
        btn.classList.remove("filtered");
    });
    mediaCards.forEach(media => {
        media.classList.remove("unfiltered");
        media.classList.remove("filtered");
    });
    mediaContent.forEach(content => {
        content.classList.remove("show-content");
    });
    filterClear.style.display = "none";
};

const selectContent = (element) => {
    const contentTag = element.currentTarget.dataset.name;
    mediaContent.forEach(content => {
        const contentName = content.dataset.name;
        if (contentName.includes(contentTag)) {
            content.classList.add("show-content");
            content.scrollIntoView({});
        } else {
            content.classList.remove("show-content");
            mediaSection.forEach(section => {
                section.style.display = "none";
            });
        };
    });
};

const unselectContent = () => {
    mediaContent.forEach(content => {
        if (content.classList.contains("show-content")) {
            content.classList.remove("show-content");
        };
        const audios = document.querySelectorAll("audio");
        for (let i = 0; i < audios.length; i++) {
            const audio = audios[i];
            if (audio.played) {
                audio.pause();
            }
        }
    });
    mediaSection.forEach(section => {
        section.style.display = "block";
    });
}