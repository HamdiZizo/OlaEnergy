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
        const usableHeight = container.offsetHeight - 100;
        const radius = Math.min(container.offsetWidth, usableHeight) / 2 - 85;

        for (let i = 0; i < numSteps; i++) {
            const stepDiv = document.createElement("div");
            stepDiv.classList.add("cycle-step");
            stepDiv.setAttribute("data-lang-en", stepsData[i].en);
            stepDiv.setAttribute("data-lang-ar", stepsData[i].ar);

            // Position evenly spaced around circle, starting from top
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

    /* Data for B2B cycle */
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

    /* Accordion menu in footer */
    // Find the content blocks for the accordion
    const footer = document.querySelector('.footer');
    if (footer) {
        // Only run if not already present
        if (!document.querySelector('.accordion-footer')) {
            // Create accordion container
            const accordionFooter = document.createElement('div');
            accordionFooter.className = 'accordion-footer';

            // Content for the three main sections
            const sections = [
                {
                    title: "Who We Are...?",
                    content: `<p>Integrated Marketing Powerhouse Since 1996<br />
                        With a legacy of over 29 years, Switch Communications delivers 360° marketing
                        solutions across events, digital, PR, and tech. As part of the Magar Group,
                        with subsidiaries like Egyptian Arts Group & Pulse, we have a robust history of driving
                        real business results for global brands like BMW, Samsung, Nestlé, Vodafone, and Shell.
                        </p>`
                },
                {
                    title: "What We Do...?",
                    content: `<p>From Strategy to Execution – One Agency, Infinite Impact<br />
                        Our high-impact experiential marketing services, which include dynamic car launches and
                        interactive exhibition booths, have been trusted by leading brands like Shell, Apache, and Khalda, BMW and Geely.
                        <br />
                        Digital & Growth: Data-driven performance ads, influencer campaigns, and SEO that deliver results for clients like Fayrouz and Cakes House.
                        <br />
                        Tech & Content: Cutting-edge UI/UX, app development, and cinematic production that bring brands to life.
                        </p>`
                },
                {
                    title: "Why Partner With Us?",
                    content: `<p>Proven Results, Trusted by Global Brands<br />
                        Our strategies are built on a foundation of deep market expertise and a relentless focus on ROI. Our successful partnership and
                        marketing activities with Shell generated a 40% increase in qualified leads in just three weeks. Led by the artistic direction
                        of Dr. Elhamy Magar and the strategic insight of ex-Samsung/Pfizer strategist Shady Magar, we deliver partnerships that drive growth.
                        </p>
                        <p><strong>Ready to elevate your brand?</strong><br />
                        Contact: Dina Al Ashry: 010-19509494 Or Hamdi El Shim: 010-92760051</p>
                        <img
                            src="https://ik.imagekit.io/weo7pcw8v/Switch%20Communications%20Logo.png?updatedAt=1754664755580"
                            alt="Switch Communications Logo"
                            class="agency-logo"
                            loading="lazy"
                        />`
                }
            ];

            // Build accordion items
            sections.forEach((sec, idx) => {
                const item = document.createElement('div');
                item.className = 'accordion-item';

                const trigger = document.createElement('div');
                trigger.className = 'accordion-trigger';
                trigger.innerHTML = `<span>${sec.title}</span>`;

                const content = document.createElement('div');
                content.className = 'accordion-content';
                content.innerHTML = `<div class="content-inner">${sec.content}</div>`;

                item.appendChild(trigger);
                item.appendChild(content);
                accordionFooter.appendChild(item);

                // Accordion functionality
                trigger.addEventListener('click', () => {
                    trigger.classList.toggle('active');
                    if (trigger.classList.contains('active')) {
                        content.style.maxHeight = content.scrollHeight + "px";
                    } else {
                        content.style.maxHeight = null;
                    }
                });
            });

            // Insert accordion before the agency logo in the footer
            const agencyLogo = footer.querySelector('.agency-logo');
            footer.insertBefore(accordionFooter, agencyLogo);
            // Hide original plain text sections to prevent duplicate info
            Array.from(footer.querySelectorAll('p')).forEach(p => {
                if (p.textContent.includes('Who We Are') || p.textContent.includes('What We Do') || p.textContent.includes('Why Partner')) {
                    p.style.display = 'none';
                }
            });
        }
    }

    /* B2B cards fade in sequence with arrow navigation */
    const b2bCardsContainer = document.getElementById("b2b-cards");
    const b2bCards = b2bCardsContainer ? Array.from(
        b2bCardsContainer.querySelectorAll(".strategic-card.fade-in")
    ) : [];
    const nextBtn = b2bCardsContainer ? document.getElementById("card-next-button") : null;
    let currentCardIndex = 0;

    function showCard(index) {
        if (index < 0 || index >= b2bCards.length) return;
        b2bCards.forEach((card, i) => {
            if (i === index) card.classList.add("visible");
            else card.classList.remove("visible");
        });
        nextBtn.style.display = index < b2bCards.length - 1 ? "inline-block" : "none";
        currentCardIndex = index;
        b2bCards[index].focus();
    }

    function startB2BCardsSequence() {
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
    const carousel = document.getElementById("image-carousel");
    if (carousel) {
        const images = Array.from(carousel.querySelectorAll("img.carousel-image"));
        const nextCarouselBtn = document.getElementById("carousel-next-button");
        let currentImageIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            currentImageIndex = index;
        }

        if (nextCarouselBtn) {
            nextCarouselBtn.addEventListener("click", () => {
                let nextIndex = (currentImageIndex + 1) % images.length;
                showImage(nextIndex);
            });
        }

        showImage(0);
    }

    updateAllTexts(currentLang());
});
