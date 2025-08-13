document.addEventListener("DOMContentLoaded", () => {
    // Language Switching
    function getLang() { return document.body.getAttribute("data-lang") || "en"; }
    function updateLangTexts(lang) {
        document.querySelectorAll("[data-lang-en]").forEach(el => {
            el.textContent = el.getAttribute(`data-lang-${lang}`);
        });
    }
    document.getElementById("lang-toggle-btn").onclick = function () {
        const newLang = getLang() === "en" ? "ar" : "en";
        document.body.setAttribute("data-lang", newLang);
        document.body.classList.toggle("rtl", newLang === "ar");
        this.textContent = newLang === "en" ? "العربية" : "English";
        updateLangTexts(newLang);
    };
    updateLangTexts(getLang());

    // Flywheel Card Texts (B2C/B2B)
    function updateFlywheelCards(sectionId) {
        document.querySelectorAll(`#${sectionId} .flywheel-main-card`).forEach(el => {
            el.textContent = el.getAttribute(`data-lang-${getLang()}`);
        });
        document.querySelectorAll(`#${sectionId} .flywheel-card`).forEach(el => {
            el.textContent = el.getAttribute(`data-lang-${getLang()}`);
        });
    }
    updateFlywheelCards("b2c-cards");
    updateFlywheelCards("b2b-cards-section");

    // Geo Card Texts
    document.querySelectorAll(".geo-label").forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${getLang()}`);
    });
    document.querySelectorAll(".geo-value").forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${getLang()}`);
    });

    // Image Carousel
    const carouselImages = Array.from(document.querySelectorAll("#image-carousel img.carousel-image"));
    const nextBtn = document.getElementById("carousel-next-button");
    let currentIdx = 0;
    function showImage(idx) {
        carouselImages.forEach((img, i) => img.classList.toggle("active", i === idx));
        currentIdx = idx;
    }
    if (nextBtn) {
        nextBtn.onclick = function () {
            let next = (currentIdx + 1) % carouselImages.length;
            showImage(next);
        };
    }
    showImage(0);

    // Footer Accordion
    document.querySelectorAll(".accordion-trigger").forEach((btn, i) => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".accordion-content").forEach((content, idx) => {
                if (idx === i) {
                    content.classList.toggle("show");
                    btn.classList.toggle("active");
                    content.style.maxHeight = content.classList.contains("show") ? content.scrollHeight + "px" : null;
                } else {
                    content.classList.remove("show");
                    document.querySelectorAll(".accordion-trigger")[idx].classList.remove("active");
                    content.style.maxHeight = null;
                }
            });
        });
    });

    // Hero headline animation
    const heroHeadline = document.querySelector(".hero-headline");
    if (heroHeadline) {
        const heroText = heroHeadline.getAttribute(`data-lang-${getLang()}`);
        heroHeadline.innerHTML = heroText.replace(/(\S+\s*)/g, `<span class="word">$&</span>`);
        if (window.anime) {
            anime.timeline({ easing: "easeOutExpo" })
                .add({
                    targets: ".hero-headline .word",
                    opacity: [0, 1],
                    translateY: [30, 0],
                    delay: anime.stagger(200),
                    duration: 800,
                });
        }
    }

    // Before & After Slider
    const sliderContainer = document.getElementById("before-after");
    if (sliderContainer) {
        const afterImage = document.getElementById("after-image");
        const handle = document.getElementById("slider-handle");
        let isDragging = false;
        const onDrag = (e) => {
            if (!isDragging) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const rect = sliderContainer.getBoundingClientRect();
            let offsetX = clientX - rect.left;
            offsetX = Math.max(0, Math.min(rect.width, offsetX));
            afterImage.style.width = `${offsetX}px`;
            handle.style.left = `${offsetX}px`;
        };
        handle.addEventListener("mousedown", (e) => { isDragging = true; e.preventDefault(); });
        document.addEventListener("mouseup", () => { isDragging = false; });
        document.addEventListener("mousemove", onDrag);
        handle.addEventListener("touchstart", (e) => { isDragging = true; e.preventDefault(); }, { passive: false });
        document.addEventListener("touchend", () => { isDragging = false; });
        document.addEventListener("touchmove", onDrag);
    }
});
