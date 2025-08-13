document.addEventListener("DOMContentLoaded", () => {
    const currentLang = () => document.body.getAttribute("data-lang") || "en";

    const updateAllTexts = (lang) => {
        document.querySelectorAll("[data-lang-en]").forEach((el) => {
            const text = el.getAttribute(`data-lang-${lang}`);
            if (text !== null) el.innerHTML = text;
        });
    };

    /* Language toggle button */
    const langToggleButton = document.getElementById("lang-toggle-btn");
    if (langToggleButton) {
        langToggleButton.addEventListener("click", () => {
            const newLang = currentLang() === "en" ? "ar" : "en";
            document.body.setAttribute("data-lang", newLang);
            document.body.classList.toggle("rtl", newLang === "ar");
            langToggleButton.textContent = newLang === "en" ? "English" : "العربية";

            // Update all texts immediately
            updateAllTexts(newLang);

            // Re-render cycles with new language
            if (roiCycleContainer.dataset.initialized) {
                createAnimatedCycle(roiCycleContainer, roiCycleData.center, roiCycleData.steps);
            }
            if (b2bCycleContainer.dataset.initialized) {
                createAnimatedCycle(b2bCycleContainer, b2bCycleData.center, b2bCycleData.steps);
            }
        });
    }

    /* --- The B2C Flywheel: Gaining Oil ROI Cycle with circle arrangement adjustment --- */
    const createAnimatedCycle = (container, centerHTML, stepsData) => {
        container.innerHTML = "";
        const centerCore = document.createElement("div");
        centerCore.classList.add("center-core");
        container.appendChild(centerCore);

        const numSteps = stepsData.length;
        const radius = container.offsetWidth / 2 - 85; // Adjusted radius for better circle roundness

        for (let i = 0; i < numSteps; i++) {
            const stepDiv = document.createElement("div");
            stepDiv.classList.add("cycle-step");
            stepDiv.setAttribute("data-lang-en", stepsData[i].en);
            stepDiv.setAttribute("data-lang-ar", stepsData[i].ar);

            // Position evenly spaced around circle 
            // Start from 90deg (top center)
            const angle = (i / numSteps) * 2 * Math.PI - Math.PI / 2;
            const leftPos = container.offsetWidth / 2 + radius * Math.cos(angle);
            const topPos = container.offsetHeight / 2 + radius * Math.sin(angle);

            stepDiv.style.left = `${leftPos}px`;
            stepDiv.style.top = `${topPos}px`;

            container.appendChild(stepDiv);
        }

        // Set center core content with language replacement
        const lang = currentLang();
        centerCore.innerHTML = centerHTML.replace(/\[lang\]/g, lang);

        // Update each step's displayed text for current language
        container.querySelectorAll(".cycle-step").forEach((step, i) => {
            step.innerHTML = stepsData[i][lang];
        });
    };

    /* Data for B2C (ROI) cycle */
    const roiCycleData = {
        center: `<span data-lang-en="Gaining\nOil ROI" data-lang-ar="تحقيق\nعائد الزيوت"></span>`,
        steps: [
            { en: "1. Car Manufacturer Loyalty", ar: "١. ولاء شركات تصنيع السيارات" },
            { en: "2. Raising Ola Brand Image", ar: "٢. تعزيز صورة علامة أولا" },
            { en: "3. Changing Customer Experience", ar: "٣. تغيير تجربة العملاء" },
            { en: "4. Gas Station Perception", ar: "٤. تصور محطة الوقود" },
            { en: "5. Auditing & Mystery Shopping", ar: "٥. التدقيق والمتسوق السري" },
            { en: "6. Marketing & Branding", ar: "٦. التسويق والعلامة التجارية" },
            { en: "7. Consumer Word-of-Mouth", ar: "٧. الكلام الشفهي للمستهلك" },
            { en: "8. Gas Station Traffic", ar: "٨. حركة مرور المحطات" },
            { en: "9. Car Manufacturer Trust", ar: "٩. ثقة شركات تصنيع السيارات" },
        ],
    };

    /* Data for B2B cycle (adjusted per feedback) with main center and 5 circles */
    const b2bCycleData = {
        center: `<span data-lang-en="Oil B2B" data-lang-ar="النفط الشركات"></span>`,
        steps: [
            { en: "1. B2B Events", ar: "١. فعاليات الشركات" },
            { en: "2. Launching", ar: "٢. الإطلاق" },
            { en: "3. Governorate Oil Change Outlet Branding", ar: "٣. ترويج منافذ تغيير الزيت للمحافظات" },
            { en: "4. B2B Branding Kit", ar: "٤. مجموعة العلامة التجارية للشركات" },
            { en: "5. Car Manufacturing Partnership", ar: "٥. شراكة مع شركات تصنيع السيارات" },
        ],
    };

    const roiCycleContainer = document.getElementById("roi-cycle-container");
    const b2bCycleContainer = document.getElementById("b2b-cycle-container");

    /* Intersection Observer for lazy init of cycles and anim-targets */
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";

                    if (entry.target === roiCycleContainer && !roiCycleContainer.dataset.initialized) {
                        createAnimatedCycle(roiCycleContainer, roiCycleData.center, roiCycleData.steps);
                        anime({
                            targets: roiCycleContainer.querySelectorAll(".cycle-step"),
                            scale: [0.5, 1],
                            opacity: [0, 1],
                            delay: anime.stagger(250),
                            duration: 1200,
                            easing: "easeOutElastic(1, .8)",
                        });
                        roiCycleContainer.dataset.initialized = "true";
                    }

                    if (entry.target === b2bCycleContainer && !b2bCycleContainer.dataset.initialized) {
                        createAnimatedCycle(b2bCycleContainer, b2bCycleData.center, b2bCycleData.steps);
                        anime({
                            targets: b2bCycleContainer.querySelectorAll(".cycle-step"),
                            scale: [0.5, 1],
                            opacity: [0, 1],
                            delay: anime.stagger(300),
                            duration: 1200,
                            easing: "easeOutElastic(1, .8)",
                        });
                        b2bCycleContainer.dataset.initialized = "true";
                        // Trigger B2B cards animations sequence start
                        startB2BCardsSequence();
                    }

                    if (entry.target.classList.contains("blueprint-item")) {
                        const dt = entry.target.querySelector("dt");
                        const dd = entry.target.querySelector("dd");

                        anime({ targets: dt, translateX: [-30, 0], opacity: [0, 1], duration: 800 });

                        const text = dd.getAttribute(`data-text-${currentLang()}`);
                        let i = 0;
                        dd.innerHTML = "";
                        const cursor = document.createElement("span");
                        cursor.className = "typing-cursor";
                        dd.appendChild(cursor);

                        function type() {
                            if (i < text.length) {
                                dd.insertBefore(document.createTextNode(text.charAt(i)), cursor);
                                i++;
                                setTimeout(type, 25);
                            } else {
                                cursor.style.display = "none";
                            }
                        }
                        setTimeout(type, 600);
                    }

                    if (
                        entry.target.id === "ola-remodelling" ||
                        entry.target.id === "action-plan"
                    ) {
                        entry.target.classList.add("visible");
                    }

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    /* Observe anim-target elements and new #ola-remodelling, #action-plan */
    document.querySelectorAll(".anim-target").forEach((el) => observer.observe(el));
    const olaRemodellingEl = document.getElementById("ola-remodelling");
    if (olaRemodellingEl) observer.observe(olaRemodellingEl);
    const actionPlanEl = document.getElementById("action-plan");
    if (actionPlanEl) observer.observe(actionPlanEl);

    /* Hero headline text animation */
    const heroHeadline = document.querySelector(".hero-headline");
    const heroText = heroHeadline.getAttribute(`data-lang-${currentLang()}`);
    heroHeadline.innerHTML = heroText.replace(/(\S+\s*)/g, `<span class="word">$&</span>`);
    anime
        .timeline({ easing: "easeOutExpo" })
        .add({
            targets: ".hero-headline .word",
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(200),
            duration: 800,
        });

    /* Before & After slider functionality */
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

            if (offsetX < 0) offsetX = 0;
            if (offsetX > rect.width) offsetX = rect.width;

            afterImage.style.width = `${offsetX}px`;
            handle.style.left = `${offsetX}px`;
        };

        handle.addEventListener("mousedown", (e) => {
            isDragging = true;
            e.preventDefault();
        });
        document.addEventListener("mouseup", () => {
            isDragging = false;
        });
        document.addEventListener("mousemove", onDrag);
        handle.addEventListener(
            "touchstart",
            (e) => {
                isDragging = true;
                e.preventDefault();
            },
            { passive: false }
        );
        document.addEventListener("touchend", () => {
            isDragging = false;
        });
        document.addEventListener("touchmove", onDrag);
    }

    /* Activation Overview slideshow auto rotating */
    const slideshow = document.getElementById("overview-slideshow");
    if (slideshow) {
        const slides = slideshow.querySelectorAll(".slide");
        if (slides.length > 1) {
            let currentSlide = 0;
            setInterval(() => {
                slides[currentSlide].classList.remove("active");
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add("active");
            }, 4000);
        }
    }

    /* Accordion functional toggling */
    const accordionTriggers = document.querySelectorAll(".accordion-trigger");
    accordionTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const content = trigger.nextElementSibling;
            trigger.classList.toggle("active");
            if (trigger.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    /* B2B cards fade in sequence with arrow navigation */
    const b2bCardsContainer = document.getElementById("b2b-cards");
    const b2bCards = Array.from(
        b2bCardsContainer.querySelectorAll(".strategic-card.fade-in")
    );
    const nextBtn = document.getElementById("card-next-button");
    let currentCardIndex = 0;

    function showCard(index) {
        if (index < 0 || index >= b2bCards.length) return;
        b2bCards.forEach((card, i) => {
            if (i === index) card.classList.add("visible");
            else card.classList.remove("visible");
        });
        // Show next button only if not last card
        nextBtn.style.display = index < b2bCards.length - 1 ? "inline-block" : "none";
        currentCardIndex = index;
        // Accessibility: Focus the visible card
        b2bCards[index].focus();
    }

    function startB2BCardsSequence() {
        // Initialize starting with first card visible
        showCard(0);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (currentCardIndex < b2bCards.length - 1) {
                showCard(currentCardIndex + 1);
            }
        });
    }

    /* Image carousel with Next button */
    const carouselSection = document.getElementById("image-carousel-section");
    const carousel = document.getElementById("image-carousel");
    if (carousel) {
        const images = Array.from(carousel.querySelectorAll("img.carousel-image"));
        const nextCarouselBtn = document.getElementById("carousel-next-button");
        let currentImageIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.classList.add("active");
                } else {
                    img.classList.remove("active");
                }
            });
            currentImageIndex = index;
        }

        if (nextCarouselBtn) {
            nextCarouselBtn.addEventListener("click", () => {
                let nextIndex = (currentImageIndex + 1) % images.length;
                showImage(nextIndex);
            });
        }

        // Initialize with first image visible
        showImage(0);
    }

    /* Initial texts update */
    updateAllTexts(currentLang());
});
